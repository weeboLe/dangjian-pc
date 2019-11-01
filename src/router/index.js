import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import("../pages/Index");
const Login = () => import("../components/login/login");

const Learn = () => import("../pages/Learn");
const LearnOnlineSchool = () => import("../components/learn/LearnOnlineSchool");
const LearnOnlineSchool1 = () => import("../components/learn/learnOnlineSchool/LearnOnlineSchool1");
const LearnOnlineSchool2 = () => import("../components/learn/learnOnlineSchool/LearnOnlineSchool2");
const LearnOnlineSchool3 = () => import("../components/learn/learnOnlineSchool/LearnOnlineSchool3");
const LearnProjectLearning = () => import("../components/learn/LearnProjectLearning");
const LearnProjectLearning1 = () => import("../components/learn/learnProjectLearning/LearnProjectLearning1");
const LearnProjectLearning2 = () => import("../components/learn/learnProjectLearning/LearnProjectLearning2");
const LearnProjectLearning3 = () => import("../components/learn/learnProjectLearning/LearnProjectLearning3");
const LearnProjectLearning4 = () => import("../components/learn/learnProjectLearning/LearnProjectLearning4");
const LearnStudyNotes = () => import("../components/learn/LearnStudyNotes");
const LearnOnlineTest = () => import("../components/learn/LearnOnlineTest");
const LearnOnlineTest1 = () => import("../components/learn/learnOnlineTest/LearnOnlineTest1");
const LearnOnlineTest2 = () => import("../components/learn/learnOnlineTest/LearnOnlineTest2");
const LearnOnlineTest3 = () => import("../components/learn/learnOnlineTest/LearnOnlineTest3");
const LearnOnlineTest4 = () => import("../components/learn/learnOnlineTest/LearnOnlineTest4");

const Affairs = () => import("../pages/Affairs");

const Member = () => import("../pages/Member");
const MemberDues = () => import("../pages/MemberDues");
const MemberTransfer = () => import("../pages/MemberTransfer");
const MemberData = () => import("../pages/MemberData");
const MemberFrame = () => import("../pages/MemberFrame");

const MembershipForm = () => import("../pages/MembershipForm");
const DifficultApply = () => import("../pages/DifficultApply");
const InformDetails = () => import("../pages/InformDetails");
const FileDetails = () => import("../pages/FileDetails");
const NewsParty = () => import("../pages/NewsParty");
const PhotoDetails = () => import("../pages/PhotoDetails");





const Work = () => import("../pages/Work");
const WorkStaffHome = () => import("../components/work/WorkStaffHome");
const WorkStaffHome1 = () => import("../components/work/workStaffHome/WorkStaffHome1");
const WorkStaffHome2 = () => import("../components/work/workStaffHome/WorkStaffHome2");
const WorkStaffHome3 = () => import("../components/work/workStaffHome/WorkStaffHome3");
const WorkStaffHome4 = () => import("../components/work/workStaffHome/WorkStaffHome4");
const WorkLeagueFlag = () => import("../components/work/WorkLeagueFlag");
const WorkLeagueFlag1 = () => import("../components/work/workLeagueFlag/WorkLeagueFlag1");
const WorkLeagueFlag2 = () => import("../components/work/workLeagueFlag/WorkLeagueFlag2");
const WorkLeagueFlag3 = () => import("../components/work/workLeagueFlag/WorkLeagueFlag3");


const Supervise = () => import("../pages/Supervise");
const SuperviseInspect = () => import("../components/supervise/SuperviseInspect");
const SuperviseInspect1 = () => import("../components/supervise/superviseInspect/SuperviseInspect1");
const SuperviseInspect2 = () => import("../components/supervise/superviseInspect/SuperviseInspect2");
const SuperviseHonest = () => import("../components/supervise/SuperviseHonest");
const SuperviseHonest1 = () => import("../components/supervise/superviseHonest/SuperviseHonest1");
const SuperviseHonest2 = () => import("../components/supervise/superviseHonest/SuperviseHonest2");
const SuperviseHonest3 = () => import("../components/supervise/superviseHonest/SuperviseHonest3");
const SuperviseHonest4 = () => import("../components/supervise/superviseHonest/SuperviseHonest4");

const People = () => import("../pages/People");
const PeopleDifficultyHelp = () => import("../components/people/PeopleDifficultyHelp");
const PeopleDifficultyHelp1 = () => import("../components/people/peopleDifficultyHelp/PeopleDifficultyHelp1");
const PeopleDifficultyHelp2 = () => import("../components/people/peopleDifficultyHelp/PeopleDifficultyHelp2");
const PeopleOvercomePoverty = () => import("../components/people/PeopleOvercomePoverty");
const PeopleOvercomePoverty1 = () => import("../components/people/peopleOvercomePoverty/PeopleOvercomePoverty1");
const PeopleOvercomePoverty2 = () => import("../components/people/peopleOvercomePoverty/PeopleOvercomePoverty2");
const PeopleVolunteerActivity = () => import("../components/people/PeopleVolunteerActivity");
const PeopleVolunteerActivity1 = () => import("../components/people/peopleVolunteerActivity/PeopleVolunteerActivity1");
const PeopleOnlineMall = () => import("../components/people/PeopleOnlineMall");
const PeopleOnlineMall1 = () => import("../components/people/peopleOnlineMall/PeopleOnlineMall1");

const Forum = () => import("../pages/Forum");

const Party = () => import("../pages/Party");

const PartyMember = () => import("../components/partyMember/partyMember");
const PartyMemberClire1 = () => import("../components/partyMember/partyMemberCilre/partyMemberClire1");
const PartyMemberClire2 = () => import("../components/partyMember/partyMemberCilre/partyMemberClire2");
const PartyMemberClire3 = () => import("../components/partyMember/partyMemberCilre/partyMemberClire3");

const Message = () => import("../pages/Message");
const Flags = () => import("../pages/Flags");
const PartyFlag = () => import("../components/partyFlag/PartyFlag");
const PartyHistory = () => import("../components/partyFlag/PartyHistory");
const PartyFlagNavigation1 = () => import("../components/partyFlag/partyFlagNavigation/partyFlagNavigation1");
const PartyFlagNavigation2 = () => import("../components/partyFlag/partyFlagNavigation/partyFlagNavigation2");
const PartyFlagNavigation3 = () => import("../components/partyFlag/partyFlagNavigation/partyFlagNavigation3");
const PartyHistory1 = () => import("../components/partyFlag/paryHistory/partyHistory1");
const PartyHistory2 = () => import("../components/partyFlag/paryHistory/partyHistory2");
const PartyHistory3 = () => import("../components/partyFlag/paryHistory/partyHistory3");

Vue.use(Router);


const router = new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/learn',
      component: Learn,
      children: [
        {
          path: '/learn/',
          redirect: '/learn/LearnOnlineSchool'
        },
        {
          path: '/learn/LearnOnlineSchool',
          name: 'LearnOnlineSchool',
          component: LearnOnlineSchool,
          children: [
            {
              path: '/learn/LearnOnlineSchool/',
              redirect: '/learn/LearnOnlineSchool/LearnOnlineSchool1'
            },
            {
              path: '/learn/LearnOnlineSchool/LearnOnlineSchool1',
              name: 'LearnOnlineSchool1',
              component: LearnOnlineSchool1
            },
            {
              path: '/learn/LearnOnlineSchool/LearnOnlineSchool2',
              name: 'LearnOnlineSchool2',
              component: LearnOnlineSchool2
            },
            {
              path: '/learn/LearnOnlineSchool/LearnOnlineSchool3',
              name: 'LearnOnlineSchool3',
              component: LearnOnlineSchool3
            }
          ]
        },
        {
          path: '/learn/learnProjectLearning',
          name: 'LearnProjectLearning',
          component: LearnProjectLearning,
          children: [
            {
              path: '/learn/learnProjectLearning/',
              redirect: '/learn/learnProjectLearning/LearnProjectLearning1'
            },
            {
              path: '/learn/learnProjectLearning/LearnProjectLearning1',
              name: 'LearnProjectLearning1',
              component: LearnProjectLearning1
            },
            {
              path: '/learn/learnProjectLearning/LearnProjectLearning2',
              name: 'LearnProjectLearning2',
              component: LearnProjectLearning2
            },
            {
              path: '/learn/learnProjectLearning/LearnProjectLearning3',
              name: 'LearnProjectLearning3',
              component: LearnProjectLearning3
            },
            {
              path: '/learn/learnProjectLearning/LearnProjectLearning4',
              name: 'LearnProjectLearning4',
              component: LearnProjectLearning4
            }
          ]
        },
        {
          path: '/learn/learnStudyNotes',
          name: 'LearnStudyNotes',
          component: LearnStudyNotes
        },
        {
          path: '/learn/learnOnlineTest',
          name: 'LearnOnlineTest',
          component: LearnOnlineTest,
          children: [
            {
              path: '/learn/learnOnlineTest/',
              redirect: '/learn/learnOnlineTest/learnOnlineTest1'
            },
            {
              path: '/learn/learnOnlineTest/learnOnlineTest1',
              name: 'LearnOnlineTest1',
              component: LearnOnlineTest1
            },
            {
              path: '/learn/learnOnlineTest/learnOnlineTest2',
              name: 'LearnOnlineTest2',
              component: LearnOnlineTest2
            },
            {
              path: '/learn/learnOnlineTest/learnOnlineTest3',
              name: 'LearnOnlineTest3',
              component: LearnOnlineTest3
            },
            {
              path: '/learn/learnOnlineTest/learnOnlineTest4',
              name: 'LearnOnlineTest4',
              component: LearnOnlineTest4
            }
          ]
        }
      ]
    },
    {
      path: '/affairs',
      name: 'Affairs',
      component: Affairs
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      children: [
        {
          path: '/work/',
          redirect: '/work/workStaffHome'
        },
        {
          path: '/work/workStaffHome',
          name: 'WorkStaffHome',
          component: WorkStaffHome,
          children: [
            {
              path: '/work/workStaffHome/',
              redirect: '/work/workStaffHome/workStaffHome1'
            },
            {
              path: '/work/workStaffHome/workStaffHome1',
              name: 'WorkStaffHome1',
              component: WorkStaffHome1
            },
            {
              path: '/work/workStaffHome/workStaffHome2',
              name: 'WorkStaffHome2',
              component: WorkStaffHome2
            },
            {
              path: '/work/workStaffHome/workStaffHome3',
              name: 'WorkStaffHome3',
              component: WorkStaffHome3
            },
            {
              path: '/work/workStaffHome/workStaffHome4',
              name: 'WorkStaffHome4',
              component: WorkStaffHome4
            }
          ]
        },
        {
          path: '/work/workLeagueFlag',
          name: 'WorkLeagueFlag',
          component: WorkLeagueFlag,
          children: [
            {
              path: '/work/workLeagueFlag/',
              redirect: '/work/workLeagueFlag/workLeagueFlag1'
            },
            {
              path: '/work/workLeagueFlag/workLeagueFlag1',
              name: 'WorkLeagueFlag1',
              component: WorkLeagueFlag1
            },
            {
              path: '/work/workLeagueFlag/workLeagueFlag2',
              name: 'WorkLeagueFlag2',
              component: WorkLeagueFlag2
            },
            {
              path: '/work/workLeagueFlag/workLeagueFlag3',
              name: 'WorkLeagueFlag3',
              component: WorkLeagueFlag3
            }
          ]
        }
      ]
    },
    {
      path: '/supervise',
      name: 'Supervise',
      component: Supervise,
      children: [
        {
          path: '/supervise/',
          redirect: '/supervise/superviseInspect'
        },
        {
          path: '/supervise/superviseInspect',
          name: 'SuperviseInspect',
          component: SuperviseInspect,
          children: [
            {
              path: '/supervise/superviseInspect/',
              redirect: '/supervise/superviseInspect/superviseInspect1'
            },
            {
              path: '/supervise/superviseInspect/superviseInspect1',
              name: 'SuperviseInspect1',
              component: SuperviseInspect1
            },
            {
              path: '/supervise/superviseInspect/superviseInspect2',
              name: 'SuperviseInspect2',
              component: SuperviseInspect2
            }
          ]
        },
        {
          path: '/supervise/superviseHonest',
          name: 'SuperviseHonest',
          component: SuperviseHonest,
          children: [
            {
              path: '/supervise/superviseHonest/',
              redirect: '/supervise/superviseHonest/superviseHonest1'
            },
            {
              path: '/supervise/superviseHonest/superviseHonest1',
              name: 'SuperviseHonest1',
              component: SuperviseHonest1
            },
            {
              path: '/supervise/superviseHonest/superviseHonest2',
              name: 'SuperviseHonest2',
              component: SuperviseHonest2
            },
            {
              path: '/supervise/superviseHonest/superviseHonest3',
              name: 'SuperviseHonest3',
              component: SuperviseHonest3
            },
            {
              path: '/supervise/superviseHonest/superviseHonest4',
              name: 'SuperviseHonest4',
              component: SuperviseHonest4
            }
          ]
        }
      ]
    },
    {
      path: '/people',
      name: 'People',
      component: People,
      children: [
        {
          path: '/people/',
          redirect: '/people/peopleDifficultyHelp',
        },
        {
          path: '/people/peopleDifficultyHelp',
          name: 'PeopleDifficultyHelp',
          component: PeopleDifficultyHelp,
          children: [
            {
              path: '/people/peopleDifficultyHelp/',
              redirect: '/people/peopleDifficultyHelp/peopleDifficultyHelp1',
            },
            {
              path: '/people/peopleDifficultyHelp/peopleDifficultyHelp1',
              name: 'PeopleDifficultyHelp1',
              component: PeopleDifficultyHelp1
            },
            {
              path: '/people/peopleDifficultyHelp/peopleDifficultyHelp2',
              name: 'PeopleDifficultyHelp2',
              component: PeopleDifficultyHelp2
            }
          ]
        },
        {
          path: '/people/peopleOvercomePoverty',
          name: 'PeopleOvercomePoverty',
          component: PeopleOvercomePoverty,
          children: [
            {
              path: '/people/peopleOvercomePoverty/',
              redirect: '/people/peopleOvercomePoverty/peopleOvercomePoverty1'
            },
            {
              path: '/people/peopleOvercomePoverty/peopleOvercomePoverty1',
              name: 'PeopleOvercomePoverty1',
              component: PeopleOvercomePoverty1
            },
            {
              path: '/people/peopleOvercomePoverty/peopleOvercomePoverty2',
              name: 'PeopleOvercomePoverty2',
              component: PeopleOvercomePoverty2
            }
          ]
        },
        {
          path: '/people/peopleVolunteerActivity',
          name: 'PeopleVolunteerActivity',
          component: PeopleVolunteerActivity,
          children: [
            {
              path: '/people/peopleVolunteerActivity/',
              redirect: '/people/peopleVolunteerActivity/peopleVolunteerActivity1'
            },
            {
              path: '/people/peopleVolunteerActivity/peopleVolunteerActivity1',
              name: 'PeopleVolunteerActivity1',
              component: PeopleVolunteerActivity1
            }
          ]
        },
        {
          path: '/people/peopleOnlineMall',
          name: 'PeopleOnlineMall',
          component: PeopleOnlineMall,
          children: [
            {
              path: '/people/peopleOnlineMall/',
              redirect: '/people/peopleOnlineMall/peopleOnlineMall1'
            },
            {
              path: '/people/peopleOnlineMall/peopleOnlineMall1',
              name: 'PeopleOnlineMall1',
              component: PeopleOnlineMall1
            }
          ]
        }
      ]
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/party',
      name: 'Party',
      component: Party,
      children: [
        {
          path: '/party/',
          redirect: '/party/partyMember/partyMemberClire1',
        },
        {
          path: '/party/partyMember/partyMemberClire1',
          name: 'PartyMemberClire1',
          component: PartyMemberClire1
        },
        {
          path: '/party/partyMember/partyMemberClire2',
          name: 'PartyMemberClire2',
          component: PartyMemberClire2
        },
        {
          path: '/party/partyMember/partyMemberClire3',
          name: 'PartyMemberClire3',
          component: PartyMemberClire3
        }
      ]
    },
    {
      path: '/flags',
      name: 'Flags',
      component: Flags,
      children: [
        {
          path: '/flags/',
          redirect: '/flags/partyFlag'
        },
        {
          path: '/flags/partyFlag',
          name: 'PartyFlag',
          component: PartyFlag,
          children: [
            {
              path: '/flags/partyFlag/',
              redirect: '/flags/partyFlag/partyFlagNavigation1'
            },
            {
              path: '/flags/partyFlag/partyFlagNavigation1',
              name: 'PartyFlagNavigation1',
              component: PartyFlagNavigation1
            },
            {
              path: '/flags/partyFlag/partyFlagNavigation2',
              name: 'PartyFlagNavigation2',
              component: PartyFlagNavigation2
            },
            {
              path: '/flags/partyFlag/partyFlagNavigation3',
              name: 'PartyFlagNavigation3',
              component: PartyFlagNavigation3
            }
          ]
        },
        {
          path: '/flags/partyHistory',
          name: 'PartyHistory',
          component: PartyHistory,
          children: [
            {
              path: '/flags/partyHistory/',
              redirect: '/flag/partyHistory/partyHistory1'
            },
            {
              path: '/flags/partyHistory/partyHistory1',
              name: 'PartyHistory1',
              component: PartyHistory1
            },
            {
              path: '/flags/partyHistory/partyHistory2',
              name: 'PartyHistory2',
              component: PartyHistory2
            },
            {
              path: '/flags/partyHistory/partyHistory3',
              name: 'PartyHistory3',
              component: PartyHistory3
            }
          ]
        }
      ]
    },
    {
      path: '/member/memberDues',
      name: 'MemberDues',
      component: MemberDues
    },
    {
      path: '/member/memberTransfer',
      name: 'MemberTransfer',
      component: MemberTransfer
    },
    {
      path: '/member/memberData',
      name: 'MemberData',
      component: MemberData
    },
    {
      path: '/member/memberFrame',
      name: 'MemberFrame',
      component: MemberFrame
    },
    {
      path: '/membershipForm',
      name: 'MembershipForm',
      component: MembershipForm,
    },
    {
      path: '/difficultApply',
      name: 'DifficultApply',
      component: DifficultApply,
    },
    {
      path: '/informDetails',
      name: 'InformDetails',
      component: InformDetails,
    },
    {
      path: '/fileDetails',
      name: 'FileDetails',
      component: FileDetails,
    },
    {
      path: '/newsParty',
      name: 'NewsParty',
      component: NewsParty,
    },
    {
      path: '/photoDetails',
      name: 'PhotoDetails',
      component: PhotoDetails,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
    }



  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }

  }
})

router.beforeEach((to, from, next) => {
  let ticket = localStorage.getItem('ticket');
  let routerName = to.name;
  if (routerName != "Login") {
    if (!ticket) {
      return next({ path: '/login' })
    }
  }
  // 如果已经登录跳转至首页
  if (routerName === 'Login') {
    if (ticket) {
      return next({ path: '/index' })
    }
  }
  next();
})



export default router
