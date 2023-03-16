const skills = [
	{id: 125223, skillsKey: 'Paint', done: true},
	{id: 127904, skillsKey: 'Sing', done: false},
	{id: 139608, skillsKey: 'Play Piano', done: false}
  ];
  
  module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
	update
  };


  function update(id, skillsUpdate){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
	let skill = skills[idx];
	skill = {
		...skill, 
		...skillsUpdate
	}
    skills.splice(idx, 1, skill);	

  }


  function deleteOne(id) {
	// Find the index based on the id of the todo object
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	skills.splice(idx, 1);
  }

  function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	skill.done = false;
	skills.push(skill);
  }
  
  function getAll() {
	return skills;
  }

  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }