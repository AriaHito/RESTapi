const ex = require("express");
const course = require("../models/course");
const Course = require("../models/course");
const router = ex.Router();


//creating the routes

//get all the courses
router.get("/", async (req, res) => {

    try {
        const courses = await Course.find()
        res.json(courses)

    } catch (err) {
        res.json(err)
    }
});


//get single courses


router.get("/:courseId", async (req, res) => {

    const courseId = req.params.courseId

    try {
        const c = await Course.findById(courseId)
        res.json(c)

    } catch (err) {
        res.json(err)
    }
});




//create course

router.post("/", async (req, res) => {

    const course = await Course.create(req.body);
    res.json(course)

});



// delete course

router.delete("/:courseId", async (req, res) => {

    try {

        await course.remove({
            _id: req.params.courseId
        })
        res.json()
    } catch (error) {
        res.json(error)
    }

});

//uodate course

router.put("/:courseId", async (req, res) => {

            const course = req.params.courseId
            try {
                const updateCourse = await Course.updateOne({
                    "_id": courseId

                }, req.body)
                res.json(course)

            } catch (error) {

                res.json(error)
            }


        });





        module.exports = router ;