

constructor(){
    super();
    this.posts = [
        {
            title: "Most Popular Pogs of 2017",
            subtitle: "Slammers, Jammers, and Bammers",
            image: "http://cms.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/pogs.jpg",
            author: "@PogSlammer",
            mainText: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        {
            title: "asdfjk;",
            subtitle: "asdfjk;asdfjkla;sdf",
            image: "http://static1.milkcapmania.co.uk/Img/pogs/McDonalds%20Power%20Rangers%20%26%20VR%20Troopers/300DPI/08-Power-Rangers---Pink-Ranger.png",
            author: "@asjdfkl.",
            mainText: "asdfjk;asdglkasdg;lkadgs;l;sdalg",
        },
        {
            title: "Sleeper Slammers of 2017",
            subtitle: "We predict an epic showdown between granite 8 ball and Thor's Slammer",
            image: "http://static1.milkcapmania.co.uk/Img/pogs/McDonalds%20Power%20Rangers%20%26%20VR%20Troopers/300DPI/08-Power-Rangers---Pink-Ranger.png",
            author: "@asjdfkl.",
            mainText: "asdfjk;asdglkasdg;lkadgs;l;sdalg",
        },
        {
            title: "Most Popular Pogs of 2017",
            subtitle: "Slammers, Jammers, and Bammers",
            image: "http://cms.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/pogs.jpg",
            author: "@PogSlammer",
            mainText: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        }
    ];
}
genPosts(){
    return this.posts.map((post) => {
        return <BlogPost post = {post}/>
    })
}