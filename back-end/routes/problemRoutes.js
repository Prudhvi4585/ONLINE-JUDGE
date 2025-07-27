const express = require('express');
const router = express.Router();
const userAuth = require('../middlewares/userAuth');
const adminAuth = require('../middlewares/adminAuth');


const { getAllProblems, createProblem,updateProblem, deleteProblem, getProblemByTitle ,getFullProblemByTitle} = require('../controllers/problemController');


router.get('/getProblemByTitle/:title',getProblemByTitle);

router.get('/getAllProblems',getAllProblems);

router.post('/createProblem',adminAuth,createProblem);

router.put('/updateProblem',adminAuth,updateProblem);

router.delete('/deleteProblem',adminAuth,deleteProblem);

router.get('/getFullProblem/:title',getFullProblemByTitle);


module.exports = router;