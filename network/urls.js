const base = "https://www.reality.gr/mobile-app/";

export default {
	categories: base + "categories.php",
	posts: 		base + "posts.php",
	about: 		base + "about.php",
	gallery: 	base + "gallery.php",
	postWithID(iid) {
		return this.posts + '?id=' + iid;
	},
	categoryPosts(pid) {
		return this.posts + '?parent_id=' + pid;
	}
};