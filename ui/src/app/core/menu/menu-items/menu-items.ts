import { Injectable } from '@angular/core';
import { LanguageUtil } from 'app/app.language';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

// const MENUITEM_ADMIN =[
//   {
//     state: 'horizontal',
//     name: 'Training',
//     type: 'sub',
//     icon: 'book',
//     children: [
//       {state: 'activity', name: 'activity' },
//       {state: 'course', name: 'New Course' },
//       {state: 'course', name: 'Link Courses'},
//       {state: 'course', name: 'Disable Courses'},
//       {state: 'course', name: 'Activate Courses'},
//     ]
//   }
// ];

const MENUITEMS = [
  {
    state: 'horizontal',
    name: 'TOP MENU',
    type: 'button',
    icon: 'horizontal_split',
    label: 'New'
  },
  {
    state: 'dashboard',
    name: 'DASHBOARD',
    type: 'sub',
    label: 'New',
    icon: 'explore',
    children: [
      { state: 'crm', name: 'CRM', label: 'New' },
      { state: 'crypto', name: 'CRYPTO', label: 'New' },
      { state: 'courses', name: 'COURSES', label: 'New' },
      { state: 'saas', name: 'SAAS' },
      { state: 'web-analytics', name: 'WEB ANALYTICS' },

    ]
  },
  {
    state: 'crypto',
    name: 'CRYPTO',
    type: 'sub',
    icon: 'account_balance_wallet',
    label: 'New',
    children: [
      { state: 'marketcap', name: 'MARKET CAP' },
      { state: 'wallet', name: 'WALLET' },
      { state: 'trade', name: 'TRADE' }
    ]
  },
  {
    state: 'crm',
    name: 'CRM',
    type: 'sub',
    icon: 'supervised_user_circle',
    label: 'New',
    children: [
      { state: 'projects', name: 'PROJECTS' },
      { state: '/project-detail/01', name: 'PROJECT DETAIL' },
      { state: 'clients', name: 'CLIENTS' },
      { state: 'reports', name: 'REPORTS' }
    ]
  },
  {
    state: 'courses',
    name: 'COURSES',
    type: 'sub',
    icon: 'book',
    label: 'New',
    children: [
      { state: 'courses-list', name: 'COURSES LIST' },
      { state: 'course-detail', name: 'COURSE DETAIL' },
      { state: 'signin', name: 'SIGN IN' },
      { state: 'payment', name: 'PAYMENT' }
    ]
  },
  {
    state: 'ecommerce',
    name: 'E-COMMERCE',
    type: 'sub',
    icon: 'explore',
    label: 'New',
    children: [
      { state: 'shop', name: 'SHOP' },
      { state: 'cart', name: 'CART' },
      { state: 'checkout', name: 'CHECKOUT' },
      { state: 'cards', name: 'CARDS' },
      { state: 'invoice', name: 'INVOICE' },
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'import_contacts',
    label: 'New',
    children: [
      { state: 'media', name: 'GALLERY' },
      { state: 'mediaV2', name: 'GALLERY V2', label: 'New' },
      { state: 'pricing', name: 'PRICING' },
      { state: 'pricing-1', name: 'PRICING V2', label: 'New' },
      { state: 'blank', name: 'BLANK' },
      { state: 'timeline', name: 'TIMELINE', label: 'New' },
      { state: 'faq', name: 'FAQ', label: 'New' },
      { state: 'feedback', name: 'FEEDBACK', label: 'New' },
      { state: 'about', name: 'ABOUT', label: 'New' },
      { state: 'contact', name: 'CONTACT', label: 'New' },
      { state: 'search', name: 'SEARCH', label: 'New' },
      { state: 'comingsoon', name: 'COMING SOON', label: 'New' },
      { state: 'maintenance', name: 'MAINTENANCE', label: 'New' },
    ]
  },
  {
    state: 'user-management',
    name: 'MANAGEMENT',
    type: 'sub',
    icon: 'view_list',
    label: 'New',
    children: [
      { state: 'usermanagelist', name: 'USER LIST' },
      { state: 'usergridlist', name: 'USER GRID' }
    ]
  },

  {
    state: 'users',
    name: 'USERS',
    type: 'sub',
    icon: 'web',
    label: 'New',
    children: [
      { state: 'userlist', name: 'USER LIST' },
      { state: 'userprofile', name: 'USER PROFILE' },
      { state: 'userprofilev2', name: 'USER PROFILE V2', label: 'New' }
    ]
  },

  {
    state: 'session',
    name: 'SESSIONS',
    type: 'sub',
    icon: 'face',
    label: 'New',
    children: [
      { state: 'login', name: 'LOGIN' },
      { state: 'loginV2', name: 'LOGIN V2', label: 'New' },
      { state: 'register', name: 'REGISTER' },
      { state: 'registerV2', name: 'REGISTER V2', label: 'New' },
      { state: 'forgot-password', name: 'FORGOT' },
      { state: 'forgot-passwordV2', name: 'FORGOT V2', label: 'New' },
      { state: 'lockscreen', name: 'LOCKSCREEN' },
      { state: 'lockscreenV2', name: 'LOCKSCREEN V2', label: 'New' }
    ]
  },
  {
    state: 'video-player',
    name: 'VIDEO PLAYER',
    type: 'link',
    icon: 'videocam',
    label: 'New'
  },
  {
    state: 'taskboard',
    name: 'TASK BOARD',
    type: 'link',
    icon: 'drag_indicator',
    label: 'New'
  },
  {
    state: 'inbox',
    name: 'INBOX',
    type: 'link',
    icon: 'mail'
  },
  {
    state: 'chat',
    name: 'CHAT',
    type: 'link',
    icon: 'chat'
  },
  {
    state: 'calendar',
    name: 'CALENDAR',
    type: 'link',
    icon: 'date_range'
  },

  {
    state: 'editor',
    name: 'EDITOR',
    type: 'sub',
    icon: 'format_shapes',
    children: [
      { state: 'wysiwyg', name: 'WYSIWYG EDITOR' },
      { state: 'ckeditor', name: 'CKEDITOR' },
    ]
  },
  {
    state: 'icons',
    name: 'MATERIAL ICONS',
    type: 'link',
    icon: 'grade'
  },
  {
    state: 'chart',
    name: 'CHARTS',
    type: 'sub',
    icon: 'show_chart',
    children: [
      { state: 'ng2-charts', name: 'NG2 CHARTS' },
      { state: 'easy-pie-chart', name: 'EASY PIE' },
    ]
  },
  {
    state: 'components',
    name: 'COMPONENTS',
    type: 'sub',
    icon: 'layers',
    children: [
      { state: 'buttons', name: 'BUTTONS' },
      { state: 'cards', name: 'CARDS' },
      { state: 'grid', name: 'GRID' },
      { state: 'list', name: 'LIST' },
      { state: 'menu', name: 'MENU' },
      { state: 'slider', name: 'SLIDER' },
      { state: 'snackbar', name: 'SNACKBAR' },
      { state: 'tooltip', name: 'TOOLTIP' },
      { state: 'dialog', name: 'DIALOG' },
      { state: 'select', name: 'SELECT' },
      { state: 'input', name: 'INPUT' },
      { state: 'checkbox', name: 'CHECKBOX' },
      { state: 'radio', name: 'RADIO' },
      { state: 'toolbar', name: 'TOOLBAR' },
      { state: 'progress', name: 'PROGRESS' },
      { state: 'tabs', name: 'TABS' },
      { state: 'colorpicker', name: 'COLORPICKER' },
      { state: 'datepicker', name: 'DATEPICKER' },
    ]
  },
  {
    state: 'dragndrop',
    name: 'DRAG & DROP',
    type: 'sub',
    icon: 'mouse',
    children: [
      { state: 'dragula', name: 'DRAGULA' },
      { state: 'sortable', name: 'SORTABLEJS' }
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      { state: 'fullscreen', name: 'FULLSCREEN' },
      { state: 'selection', name: 'SELECTION' },
      { state: 'pinning', name: 'PINNING' },
      { state: 'sorting', name: 'SORTING' },
      { state: 'paging', name: 'PAGING' },
      { state: 'editing', name: 'EDITING' },
      { state: 'filter', name: 'FILTER' },
      { state: 'responsive', name: 'RESPONSIVE' }
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'insert_comment',
    children: [
      { state: 'form-wizard', name: 'FORM WIZARD' },
      { state: 'form-validation', name: 'FORM VALIDATION' },
      { state: 'form-upload', name: 'UPLOAD' },
      { state: 'form-tree', name: 'TREE' }
    ]
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'map',
    children: [
      { state: 'googlemap', name: 'GOOGLE MAP' },
      { state: 'leafletmap', name: 'LEAFLET MAP' }
    ]
  },

];

var training_menu =
{
  state: 'training',
  name: 'Course',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'welcome', name: 'My Courses' },
    // { state: 'activity', name: 'Activity' },
    // { state: 'create-course', name: 'Create Courses' },
    // { state: 'search-course', name: 'Manage Courses' },
    // { state: 'course-link', name: 'Link Course' },
    // { state: 'activations', name: 'Manage Activations' },
    // { state: 'activate-course', name: 'Activate Course' }

  ]
};

var instructor_menu =
{
  state: 'training',
  name: 'Instructor',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'create-instructor', name: 'Create Instructor' },
    // { state: 'search-instructor', name: 'Manage Instructor' }
  ]
};
var request_menu =
{
  state: 'training',
  name: 'Training Requests',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'emp-request', name: 'Employee Requests' },
    // { state: 'emp-request:/head-section', name: 'Course Suggestion by head' },
    // { state: 'my-tasks', name: 'My Tasks' },
    // { state: 'my-tasks-history', name: 'History' }
  ]
};

var user_menu =
{
  state: 'training',
  name: 'Users',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'user-creation', name: 'New User' },
    // { state: 'user-search', name: 'Search User' },
    // { state: 'user-permissions', name: 'User Permissions' }
  ]
};

var jobcard_menu =
{
  state: 'training',
  name: 'Job Card',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'job-card-management', name: 'Create Job Card' },
    // { state: 'job-card-search', name: 'Search Job Card' }
  ]
};

var report_menu =
{
  state: 'training',
  name: 'Reports',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'welcome', name: 'Welcome' }
  ]
};

var welcome_menu =
{
  state: 'training',
  name: 'Dashboard',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'welcome', name: 'Welcome' }
  ]
};

var smart_menu =
{
  state: 'training',
  name: 'Smart Engine',
  type: 'sub',
  icon: 'book',
  children: [
    // { state: 'welcome', name: 'Welcome' }
  ]
};

var ci_system_menu =
{
  state: 'training',
  name: 'CI System',
  type: 'sub',
  icon: 'grade',
  children: [
    // { state: 'cis-system', name: 'All Employees' },
    // { state: 'cis-course-requests-i-made', name: 'Course Requests' }
  ]
};

var course_managment =
{
  state: 'training',
  name: 'Course Management',
  type: 'sub',
  icon: 'grade',
  children: [
    // { state: 'course-management', name: 'Manage Courses' },
  ]
};



var dynamicMenu = [];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return dynamicMenu;
    //return MENUITEMS;
  }
  add(menu: any) {
    //m.push(menu);
  }

  update(permissions: String[],language:LanguageUtil) {
    //debugger
    dynamicMenu = []
    welcome_menu.children=[]
    training_menu.children=[]
    course_managment.children=[]
    instructor_menu.children=[]
    user_menu.children=[]
    jobcard_menu.children=[]
    ci_system_menu.children=[]
    request_menu.children=[]
    smart_menu.children=[]

    if (permissions.length > 0) {
     // debugger

      permissions.forEach(item => {
        switch (item) {
          //Dashboard
          case "mda":
            welcome_menu.children.push({ state: 'welcome', name: language.menu_welcome });
            break
          //Courses 
          case "mcmy":
            training_menu.children.push({ state: 'welcome', name: language.menu_myCourses })
            break
          case "mcc":
            training_menu.children.push({ state: 'create-course', name: language.menu_createCourses })
            break
          case "mcm":
            training_menu.children.push({ state: 'search-course', name: language.menu_manageCourses })
            break
          case "mcl":
            training_menu.children.push({ state: 'course-link', name: language.menu_linkCourse })
            break
          case "mca":
            training_menu.children.push({ state: 'activity', name: language.menu_activity })
            break
          case "mcma":
            training_menu.children.push({ state: 'activations', name: language.menu_manageActivations })
            break
          case "mcac":
            training_menu.children.push({ state: 'activate-course', name: language.menu_activateCourse })
            break

          //Manage course
          case "mncrs":
            course_managment.children.push({ state: 'course-management', name: 'Manage Courses' })
            break

          //Instructor project
          case "mic":
            instructor_menu.children.push({ state: 'create-instructor', name: language.menu_createInstructor })
            break
          case "mim":
            instructor_menu.children.push({ state: 'search-instructor', name: language.menu_manageInstructor })
            break

          //User management
          case "muc":
            user_menu.children.push({ state: 'user-creation', name: language.menu_newUser })
            break
          case "mus":
            user_menu.children.push({ state: 'user-search', name: language.menu_searchUser })
            break
          case "mup":
            user_menu.children.push({ state: 'user-permissions', name: language.menu_userPermissions })
            break

          //JOB CARD
          case "mjs":
              jobcard_menu.children.push({ state: 'job-card-search', name: language.menu_searchJobCard })
            break
          case "mjc":
              jobcard_menu.children.push({ state: 'job-card-management', name: language.menu_createJobCard })
            break

          //CI SYSTEM
          case "mciall":
            ci_system_menu.children.push({ state: 'cis-system', name: language.menu_allEmployees})
            break
          case "mcin":
            ci_system_menu.children.push({ state: 'cis-course-requests-i-made', name: language.menu_courseRequests })
            break

          //EMPLOYEE  
          case "mre":
            request_menu.children.push({ state: 'emp-request', name: language.menu_employeeRequests })
            break
          case "mrem":
            request_menu.children.push({ state: 'my-tasks', name: language.menu_myTasks })
            break
          case "mreh":
            request_menu.children.push({ state: 'my-tasks-history', name: language.menu_history })
            break

          //SMART MENU
          case "msep":
              smart_menu.children.push({ state: 'smart-profile', name: language.menu_smartProfile })
              break 
        }
      })
    }
   // this.updatePermission(permissions)
   dynamicMenu.push(welcome_menu)
      permissions.forEach(item => {
        switch (item) {
          case "mdm":
          
            break
          case "mcmn":
            dynamicMenu.push(training_menu)
            break
          case "mcmain":
            dynamicMenu.push(course_managment)
            break
          case "mima":
            dynamicMenu.push(instructor_menu)
            break
          case "mjma":
            dynamicMenu.push(jobcard_menu)
            break
          case "muma":
            dynamicMenu.push(user_menu)
            break
          case "mrma":
            dynamicMenu.push(request_menu)
            break
          case "mcima":
            dynamicMenu.push(ci_system_menu)
            break
          case "msmm":
            dynamicMenu.push(smart_menu)
            break
        }
      })
      //user_menu.children.push({ state: 'user-permissions', name: 'User Permissions' })
      //dynamicMenu.push(user_menu)
    //dynamicMenu.push(report_menu);
    //dynamicMenu[0].children.push({state: 'blank', name: 'SUB MENU1'});
  }

  
}
