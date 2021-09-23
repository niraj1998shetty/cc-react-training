const user = {
    person: {
      employee: { firstname: "Rahul" },
      likes: ["Cycling", "Hiking", "Driving"],
    },
  };
  
  let {firstname:fn,...other}=user.person.employee;
  let {likes:lk}=user.person;
  console.log("first name:",fn)
  console.log("second likes:",lk[1]);