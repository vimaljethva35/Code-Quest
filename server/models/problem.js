const mongoose = require("mongoose");
const ProblemModel = require("./ProblemModel"); // Assuming your model is defined in ProblemModel.js

// Example problem data
const exampleProblem = {
    main: {
        id: 1,
        name: "Two Sum Problem",
        difficulty: "Easy",
        like_count: 100,
        dislike_count: 5,
        description_body: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        accept_count: 500,
        submission_count: 1000,
        acceptance_rate_count: 50,
        discussion_count: 200,
        related_topics: ["Arrays", "Hash Table"],
        similar_questions: ["Three Sum", "Four Sum"],
        solution_count: 3,
        code_default_language: "JavaScript",
        code_body: {
            javascript: `
                function twoSum(nums, target) {
                    const map = new Map();
                    for (let i = 0; i < nums.length; i++) {
                        const complement = target - nums[i];
                        if (map.has(complement)) {
                            return [map.get(complement), i];
                        }
                        map.set(nums[i], i);
                    }
                    return [];
                }
            `
        }
    },
    editorial: {
        editorial_body: "To solve this problem efficiently, use a hash map to store each element's index as you iterate through the array."
    },
    test: [
        [[2, 7, 11, 15], 9], // Example test case: input array and target
        [[3, 2, 4], 6],
        [[3, 3], 6]
    ],
    function_name: "twoSum"
};

// Create a new instance of the ProblemModel
const problemInstance = new ProblemModel(exampleProblem);

// Save the instance to MongoDB
problemInstance.save()
    .then(doc => {
        console.log("Saved problem document:", doc);
    })
    .catch(err => {
        console.error("Error saving problem document:", err);
    });
