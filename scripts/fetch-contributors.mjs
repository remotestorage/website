import fetch from 'node-fetch';
import { promises as fs } from 'fs';

const repositories = [
  'remotestorage/spec',
  'remotestorage/remotestorage.js',
  'remotestorage/remotestorage-widget',
  'remotestorage/modules',
  'remotestorage/design',
  'remotestorage/website',
  'remotestorage/remotestorage.io',
  'remotestorage/api-test-suite',
  'remotestorage/myfavoritedrinks',
  'remotestorage/armadietto',
  'remotestorage/remotestorage-server',
  'remotestorage/remotestorage-ruby',
  'remotestorage/rs-serve',
  'remotestorage/django-remotestorage',
  'remotestorage/fuse',
  'remotestorage/ember-cli-remotestorage',
];

const filename = './public/data/contributors.json';

const ignoredUsernames = [
  'dependabot',
  'ember-tomster',
];

async function fetchContributors(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/contributors`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch contributors for ${repo}: ${response.statusText}`);
    }

    const data = await response.json();

    return data.map(contributor => ({
      name: contributor.login,
      avatar: contributor.avatar_url,
      github: contributor.html_url,
      commits: contributor.contributions
    }));
  } catch (error) {
    console.error(`Failed to fetch contributors for ${repo}: ${error.message}`);
    return [];
  }
}

async function fetchAllContributors() {
  let allContributors = [];

  for (const repo of repositories) {
    const contributors = await fetchContributors(repo);
    allContributors = allContributors.concat(contributors);
  }

  allContributors = allContributors.filter(contributor => !ignoredUsernames.includes(contributor.name));

  // Aggregate contributions from the same contributor across different repositories
  const aggregatedContributors = allContributors.reduce((acc, contributor) => {
    const existing = acc.find(c => c.github === contributor.github);
    if (existing) {
      existing.commits += contributor.commits;
    } else {
      acc.push(contributor);
    }
    return acc;
  }, []);

  aggregatedContributors.sort((a, b) => b.commits - a.commits);

  await fs.writeFile(filename, JSON.stringify(aggregatedContributors, null, 2));
  console.log(`Contributors list saved to ${filename}`);
}

fetchAllContributors();
