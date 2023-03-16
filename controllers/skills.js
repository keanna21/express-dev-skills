const SkillsModel = require('../models/skills')

module.exports = {
    index: index,
    show,
    new: newSkills,create,
    delete: deleteSkill
}
function deleteSkill(req, res){
	
	SkillsModel.deleteOne(req.params.id);
	res.redirect('/skills')
}

function create(req, res) {
    console.log(req.body,)

    SkillsModel.create(req.body)

    res.redirect('/skills')
}

function newSkills(req, res) {
    res.render('skills/new')

}

function show(req, res){
    console.log(req.params.id)
    res.render('skills/show', {potato: SkillsModel.getOne(req.params.id) })
}

function index(req, res, next) {
    res.render('skills/index.ejs',
    {skills: SkillsModel.getAll()})
}

