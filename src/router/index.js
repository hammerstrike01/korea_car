import VueRouter from 'vue-router'
import routepath from '../lib/routes';
import Dash from '../views/Dash.vue'
import Login from '../views/auth/Login.vue'
import Register3 from '../views/auth/Register3.vue' 
import Register1 from '../views/auth/Register1.vue'
import Register2 from '../views/auth/Register2.vue'
import Home from '../views/home/Home.vue'
import Substantiation from '../views/substantiation/Substantiation.vue'
import Reservation from '../views/reservation/Reservation.vue'
import Reservation1 from '../views/reservation/Reservation1.vue'
import Reservation2 from '../views/reservation/Reservation2.vue'
import Reservation3 from '../views/reservation/Reservation3.vue'
import Notice from '../views/participation/Notice.vue'
import NoticeDetail from '../views/participation/NoticeDetail.vue'
import ReferenceDetail from '../views/participation/ReferenceDetail.vue'
import Reference from '../views/participation/Reference.vue'
import TechnologyDetail from '../views/participation/TechnologyDetail.vue'
import Technology from '../views/participation/Technology.vue'
import TechnologyRegister from '../views/participation/TechnologyRegister.vue'

 
const routes = [
         
        
         
        
        {//홈
            path: '/',
            component: Dash, 
            children: [
            {
                path: routepath.home,
                alias: '',
                component: Home,
                meta: {description: '홈'}
            }, 
            {
                path: routepath.substantiation,
                component: Substantiation,
                meta: {description: '실증관리'}
            },
            {
                path: routepath.reservation,
                component: Reservation,
                meta: {description: '실증관리'}
            },
            
            {
                path: routepath.login,
                component: Login,
                meta: {description: '로그인'}
            },
            {
                path: routepath.register1,
                component: Register1,
                meta: {description: '회원가입-약관페이지'}
            },
            {
                path: routepath.register2,
                component: Register2,
                meta: {description: '회원가입-기본정보'}
            },
            {
                path: routepath.register3,
                component: Register3,
                meta: {description: '회원가입-기본정보'}
            },
            {
                path: routepath.reservation1,
                component: Reservation1,
                meta: {description: '예약관리-날짜 및 차량 선택'}
            },
            {
                path: routepath.reservation2,
                component: Reservation2,
                meta: {description: '예약관리-장비 선택'}
            },
            {
                path: routepath.reservation3,
                component: Reservation3,
                meta: {description: '예약관리-구간 선택'}
            },
            {
                path: routepath.notice,
                component: Notice,
                meta: {description: '참여공간-공지사항'}
            },
            {
                path: routepath.noticeDetail,
                component: NoticeDetail,
                meta: {description: '참여공간-공지사항-상세보기페이지'}
            },
            {
                path: routepath.referenceDetail,
                component: ReferenceDetail,
                meta: {description: '참여공간-자료실-상세보기페이지'}
            },
            {
                path: routepath.reference,
                component: Reference,
                meta: {description: '참여공간-자료실'}
            },
            {
                path: routepath.technology,
                component: Technology,
                meta: {description: '참여공간-기술공유자료실'}
            },
            {
                path: routepath.technologyDetail,
                component: TechnologyDetail,
                meta: {description: '참여공간-기술공유자료실-상세보기'}
            },
            {
                path: routepath.technologyRegister,
                component: TechnologyRegister,
                meta: {description: '참여공간-기술공유자료실-상세보기'}
            },
            
            
            
 
            ]
        },
    ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router;