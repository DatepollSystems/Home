module.exports = {
  sidebar: {
    DatePollSystems: ['index', 'logos'],
    DatePoll: [
      'DatePoll/index',
      'DatePoll/screenshots',
      'DatePoll/installation',
      'DatePoll/update',
      'DatePoll/devAndBuilding',
      'DatePoll/translations',
      'DatePoll/imprint_and_privacy_policy_example',
      'DatePoll/permissions',
      {
        'REST API': [
          'DatePoll/API/index',
          {
            'Authentication': [
              'DatePoll/API/authentication/signin',
              'DatePoll/API/authentication/changePasswordAfterSignin',
              'DatePoll/API/authentication/jwtRefresh',
              'DatePoll/API/authentication/forgotPassword'
            ]
          },
          {
            'User': [
              'DatePoll/API/user/index',
              'DatePoll/API/user/sessionTokens',
              'DatePoll/API/user/changePassword',
              'DatePoll/API/user/changeEmailAddresses',
              'DatePoll/API/user/changePhoneNumbers',
              'DatePoll/API/user/calendarToken',
              'DatePoll/API/user/changeSettings'
            ]
          },
          {
            'Cinema': [
              'DatePoll/API/cinema/index',
              'DatePoll/API/cinema/booking',
              'DatePoll/API/cinema/worker'
            ]
          },
          {
            'Events': [
              'DatePoll/API/events/index',
              'DatePoll/API/events/voting'
            ]
          },
          {
            'Broadcasts': [
              'DatePoll/API/broadcasts/index'
            ]
          },
          {
            'System': [
              'DatePoll/API/system/index',
              'DatePoll/API/system/logs'
            ]
          }
        ]
      }
    ],
    WaterLevelMonitor: [
        'WaterLevelMonitor/index'
    ],
    LocalSIF: [
      'LocalSIF/index'
    ]
  }
};
