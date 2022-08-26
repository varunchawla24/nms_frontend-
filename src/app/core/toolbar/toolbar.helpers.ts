export const ToolbarHelpers = {
	notifications: [
  		{
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	    {
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	    {
	        id: 'id',
	        title: 'Mail 5',
	        lastTime: '23 Minutes ago',
	        state: 'state'
	    },
	],
	currentUser: {
		photoURL: '',
		currentUserName: JSON.parse(localStorage.getItem('profile')) ? 'Welcome '+ JSON.parse(localStorage.getItem('profile')).full_name : ''
	}
};