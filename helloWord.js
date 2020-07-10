var relationship1 = {
    name: 'zero',
    friends: ['nero','hero', 'xero'],
    logFriends: function(){
      this.friends.forEach((friends) => {
        console.log(this.name,friends);
       });
    },
  };
  relationship1.logFriends();