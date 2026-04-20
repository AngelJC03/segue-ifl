export const primaryNavigationSections = [
  {
    type: 'link',
    labelKey: 'nav.home',
    path: '/Home',
  },
  {
    type: 'group',
    labelKey: 'nav.about.label',
    items: [
      { labelKey: 'nav.about.items.districtMission', path: '/DistrictMission' },
      { labelKey: 'nav.about.items.seguePledge', path: '/SeguePledge' },
      { labelKey: 'nav.about.items.foundersMessage', path: '/FoundersMessage' },
      { labelKey: 'nav.about.items.segueBoard', path: '/SegueBoard' },
      { labelKey: 'nav.about.items.teachersAndStaff', path: '/TeachersAndStaff' },
      { labelKey: 'nav.about.items.communityPartners', path: '/CommunityPartners' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.academics.label',
    items: [
      { labelKey: 'nav.academics.items.calendar2526', path: '/Calendar2526' },
      {
        labelKey: 'nav.academics.items.rideResults',
        path: 'https://ride.ri.gov/instruction-assessment/assessment/assessment-results',
        external: true,
      },
      {
        labelKey: 'nav.academics.items.powerSchool',
        path: 'https://segueifl.powerschool.com/public/',
        external: true,
      },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.familyResources.label',
    items: [
      { labelKey: 'nav.familyResources.items.schoolPoliciesAndSafety', path: '/SchoolPoliciesAndSafety' },
      { labelKey: 'nav.familyResources.items.parentAndStudentHandbook', path: '/ParentAndStudentHandbook' },
      { labelKey: 'nav.familyResources.items.familyEngagementCommittee', path: '/FamilyEngagementCommittee' },
      { labelKey: 'nav.familyResources.items.mcKinneyVentoAct', path: '/McKinneyVentoACT' },
      { labelKey: 'nav.familyResources.items.foodPantry', path: '/FoodPantry' },
      { labelKey: 'nav.familyResources.items.photoGallery', path: '/PhotoGallery' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.enroll.label',
    items: [
      { labelKey: 'nav.enroll.items.howToEnroll', path: '/HowToEnroll' },
      { labelKey: 'nav.enroll.items.formsAndDeadlines', path: '/FormsAndDeadlines' },
      { labelKey: 'nav.enroll.items.admissionsAndLottery', path: '/AdmissionsAndLottery' },
      { labelKey: 'nav.enroll.items.enrollmentPolicies', path: '/EnrollmentPolicies' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.newsAndEvents.label',
    items: [
      { labelKey: 'nav.newsAndEvents.items.eventsCalendar', path: '/EventsCalendar' },
      { labelKey: 'nav.newsAndEvents.items.newsArticles', path: '/NewsArticles' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.segueK8.label',
    items: [
      { labelKey: 'nav.segueK8.items.curriculumOverview', path: '/CurriculumOverview' },
      { labelKey: 'nav.segueK8.items.menus', path: '/Menus' },
      { labelKey: 'nav.segueK8.items.uniformPolicy', path: '/UniformPolicy' },
      { labelKey: 'nav.segueK8.items.afterSchoolPrograms', path: '/AfterSchoolPrograms' },
      { labelKey: 'nav.segueK8.items.afterSchoolEnrichment', path: '/K8AfterSchoolEnrichment' },
      { labelKey: 'nav.segueK8.items.fitnessAndWellnessPrograms', path: '/K8FitnessAndWellnessPrograms' },
      { labelKey: 'nav.segueK8.items.studentLedActivities', path: '/StudentLedActivities' },
      { labelKey: 'nav.segueK8.items.libraryExpectations', path: '/LibraryExpectations' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.legacyHighSchool.label',
    items: [
      {
        labelKey: 'nav.legacyHighSchool.items.constructionProgress',
        path: 'https://sites.google.com/view/sifl-construction-projects/home',
        external: true,
      },
      { labelKey: 'nav.legacyHighSchool.items.curriculumOverview', path: '/LegacyCurriculumOverview' },
      { labelKey: 'nav.legacyHighSchool.items.menus', path: '/LegacyMenus' },
    ],
  },
];

export const footerNavigationSections = [
  {
    type: 'link',
    labelKey: 'nav.home',
    path: '/',
  },
  {
    type: 'group',
    labelKey: 'nav.about.label',
    items: [
      { labelKey: 'nav.about.items.districtMission', path: '/DistrictMission' },
      { labelKey: 'nav.about.items.seguePledge', path: '/SeguePledge' },
      { labelKey: 'nav.about.items.foundersMessage', path: '/FoundersMessage' },
      { labelKey: 'nav.about.items.segueBoard', path: '/SegueBoard' },
      { labelKey: 'nav.about.items.teachersAndStaff', path: '/TeachersAndStaff' },
      { labelKey: 'nav.about.items.communityPartners', path: '/CommunityPartners' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.academics.label',
    items: [
      { labelKey: 'nav.academics.items.calendar2526', path: '/Calendar2526' },
      {
        labelKey: 'nav.academics.items.rideResults',
        path: 'https://ride.ri.gov/instruction-assessment/assessment/assessment-results',
        external: true,
      },
      {
        labelKey: 'nav.academics.items.powerSchool',
        path: 'https://segueifl.powerschool.com/public/',
        external: true,
      },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.familyResources.label',
    items: [
      { labelKey: 'nav.familyResources.items.transportation', path: '/Transportation' },
      { labelKey: 'nav.familyResources.items.parentAndStudentHandbook', path: '/ParentAndStudentHandbook' },
      { labelKey: 'nav.familyResources.items.schoolPoliciesAndSafety', path: '/SchoolPoliciesAndSafety' },
      { labelKey: 'nav.familyResources.items.familyEngagementCommittee', path: '/FamilyEngagementCommittee' },
      { labelKey: 'nav.familyResources.items.mcKinneyVentoAct', path: '/McKinneyVentoACT' },
      { labelKey: 'nav.familyResources.items.foodPantry', path: '/FoodPantry' },
      { labelKey: 'nav.familyResources.items.photoGallery', path: '/PhotoGallery' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.enroll.label',
    items: [
      { labelKey: 'nav.enroll.items.howToEnroll', path: '/HowToEnroll' },
      { labelKey: 'nav.enroll.items.eligibility', path: '/Eligibility' },
      { labelKey: 'nav.enroll.items.formsAndDeadlines', path: '/FormsAndDeadlines' },
      { labelKey: 'nav.enroll.items.admissionsAndLottery', path: '/AdmissionsAndLottery' },
      { labelKey: 'nav.enroll.items.enrollmentPolicies', path: '/EnrollmentPolicies' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.newsAndEvents.label',
    items: [
      { labelKey: 'nav.newsAndEvents.items.eventsCalendar', path: '/EventsCalendar' },
      { labelKey: 'nav.newsAndEvents.items.newsArticles', path: '/NewsArticles' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.segueK8.label',
    items: [
      { labelKey: 'nav.segueK8.items.curriculumOverview', path: '/CurriculumOverview' },
      { labelKey: 'nav.segueK8.items.menus', path: '/Menus' },
      { labelKey: 'nav.segueK8.items.uniformPolicy', path: '/UniformPolicy' },
      { labelKey: 'nav.segueK8.items.schoolAnnouncements', path: '/SchoolAnnouncements' },
      { labelKey: 'nav.segueK8.items.afterSchoolPrograms', path: '/AfterSchoolPrograms' },
      { labelKey: 'nav.segueK8.items.afterSchoolEnrichment', path: '/K8AfterSchoolEnrichment' },
      { labelKey: 'nav.segueK8.items.fitnessAndWellnessPrograms', path: '/K8FitnessAndWellnessPrograms' },
      { labelKey: 'nav.segueK8.items.studentLedActivities', path: '/StudentLedActivities' },
      { labelKey: 'nav.segueK8.items.libraryExpectations', path: '/LibraryExpectations' },
    ],
  },
  {
    type: 'group',
    labelKey: 'nav.legacyHighSchool.label',
    items: [
      { labelKey: 'nav.legacyHighSchool.items.curriculumOverview', path: '/LegacyCurriculumOverview' },
      { labelKey: 'nav.legacyHighSchool.items.menus', path: '/LegacyMenus' },
      { labelKey: 'nav.legacyHighSchool.items.uniformPolicy', path: '/LegacyUniformPolicy' },
      { labelKey: 'nav.legacyHighSchool.items.schoolAnnouncements', path: '/LegacySchoolAnnouncements' },
      { labelKey: 'nav.legacyHighSchool.items.afterSchoolPrograms', path: '/LegacyAfterSchoolPrograms' },
      { labelKey: 'nav.legacyHighSchool.items.afterSchoolEnrichment', path: '/LegacyAfterSchoolEnrichment' },
      { labelKey: 'nav.legacyHighSchool.items.fitnessAndWellnessPrograms', path: '/LegacyFitnessAndWellnessPrograms' },
      { labelKey: 'nav.legacyHighSchool.items.studentLedActivities', path: '/LegacyStudentLedActivities' },
      { labelKey: 'nav.legacyHighSchool.items.libraryExpectations', path: '/LegacyLibraryExpectations' },
    ],
  },
];
