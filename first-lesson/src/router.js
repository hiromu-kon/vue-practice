import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', 
      components: {
        default: Home,
        header: HeaderHome
      } 
    }, 
    { 
      path: "/users/:id", 
      component: {
        default: Users,
        header: HeaderUsers
      }, 
      props: true, 
      children: [
        { path: "posts", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "user-id-profile" }
      ] 
    }
  ]
});