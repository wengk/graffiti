Template.deleteGroup.events({
	'submit .delete-group': function(e) {
		e.preventDefault();
		var response = confirm("Are you sure you want to delete " + this.name + "?" );
		if (response) {
			Router.go('/');
			Meteor.call('deleteGroup',this._id);
		}
	}
})