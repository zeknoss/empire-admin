export default [
    {
        title: "Dashboard",
        description: "An overview of current status",
        path: "/dashboard",
        icon: "home",
        namespace: "mainMenu"
    },
    {
        title: "Pages",
        path: "/pages",
        icon: "file-alt",
        namespace: "mainMenu",
        containerOnly: true,
        node: [
            {
                title: "My Profile",
                description: "Update your profile info and your settings",
                path: "/pages/my-profile",
                icon: "user",
                namespace: "mainMenu"
            },
            {
                title: "Calendar",
                description: "Show a Fullcalendar integration with all the features",
                path: "/pages/calendar",
                icon: "calendar",
                namespace: "mainMenu"
            }
        ]
    },
    {
        title: "Components",
        path: "/components",
        icon: "toolbox",
        namespace: "mainMenu",
        containerOnly: true,
        node: [
            {
                title: "Notifications",
                description: "Show notifications, prompts and confirmations to the users",
                path: "/components/notifications",
                icon: "comment-alt",
                namespace: "mainMenu"
            },
            {
                title: "Tables",
                description: "Dynamic and useful data tables with loads of features",
                path: "/components/tables",
                icon: "th",
                namespace: "mainMenu"
            },
            {
                title: "Icons",
                description: "Wield the full power of Font Awesome 5 Pro library",
                path: "/components/icons",
                icon: "font-awesome",
                iconPrefix: "fab",
                namespace: "mainMenu"
            },
            {
                title: "Bootstrap",
                description: "Generic Bootstrap components for your everyday needs",
                path: "/components/bootstrap",
                icon: "twitter",
                iconPrefix: "fab",
                namespace: "mainMenu"
            }
        ]
    },
    {
        title: "Forms",
        description: "Form components for rich form views",
        path: "/forms",
        icon: "font",
        namespace: "mainMenu"
    },
    {
        title: "Charts",
        description: "Give your users some eye-candy graphical Charts",
        path: "/charts",
        icon: "chart-pie",
        namespace: "mainMenu"
    },
    {
        title: "Messaging",
        description: "Message box interfaces for your daily communication",
        path: "/messaging",
        icon: "comment-alt",
        namespace: "mainMenu"
    },
    {
        title: "Typography",
        description: "A beautiful panel needs a beautiful typography, right?",
        path: "/typography",
        icon: "font",
        namespace: "mainMenu"
    },
    {
        title: "Login",
        path: "/login",
        namespace: "none"
    }
];
