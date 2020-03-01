const scoreTestData = [
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'taxFairness',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'genderRights',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'education',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'racialJustice',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'immigration',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'environment',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'biden',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'bloomberg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'buttigieg',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'klobuchar',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'sanders',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'steyer',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
  {
    candidate: 'warren',
    user: '5e5b762afb9e0a1b99a48b45',
    issue: 'lgbtq',
    createdAt: '2020-03-01T07:29:19.051Z',
    updatedAt: '2020-03-01T07:29:45.402Z',
  },
];




const returnScores = {
  user: '5e5b762afb9e0a1b99a48b45',
  scoresByCandidate: {
    biden: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    bloomberg: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    buttigieg: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    klobuchar: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    sanders: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    steyer: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
    warren: {
      taxFairness: 1,
      genderRights: 1,
      education: 1,
      racialJustice: 1,
      immigration: 1,
      environment: 1,
      lgbtq: 1
    },
  }
};

module.exports = {
  scoreTestData,
  returnScores,
};