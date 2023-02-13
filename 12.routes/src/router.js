import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import ActivitesList from "./components/activite/ListActivities.vue";
import NotFound from "./components/error/NotFound.vue";
import ActiveActivites from "./components/activite/ActiveActivites.vue";
import NotActiveActivites from "./components/activite/NotActiveActivites.vue";
import SearchInTeams from "./components/teams/SearchResult.vue";
import ActiviteFooter from "./components/activite/ActivitesFooter.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "homePage", path: "/", redirect: "/teams" },
    { name: "teams", path: "/teams", component: TeamsList },
    { name: "users", path: "/users", component: UsersList, alias: "/members" },
    {
      name: "activites",
      path: "/activites",
      components: { default: ActivitesList, footer: ActiviteFooter },
      children: [
        {
          name: "activeActivites",
          path: "active",
          components: { default: ActiveActivites, footer: ActiviteFooter },
        },
        {
          name: "notActiveActivites",
          path: "not-active",
          components: { default: NotActiveActivites, footer: ActiviteFooter },
        },
      ],
    },
    { name: "TeamSearching", path: "/search", component: SearchInTeams },
    {
      name: "teamDetails",
      path: "/team/:id",
      meta: {
        needAuth: true,
      },
      component: TeamMembers,
      props: true,
      beforeEnter(to, from, next) {
        console.log("Team Details Guard.");
        if (
          to.params.id === "t1" ||
          to.params.id === "t2" ||
          to.params.id === "t3"
        )
          next(true);
        else next(false);
      },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log("Routes Guard say Good morning Sallam.");
  console.log(to.name);
  next(true);
});

router.afterEach(function (to, from) {
  console.log("After Routing Operation is done!");
  console.log(to, from);
});


export default router;