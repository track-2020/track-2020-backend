 const newArray = array.reduce((acc, score) => {
   console.log(score.candidate._id);
   if(!acc[score.candidate._id]) {
     acc[score.candidate._id] = {
       _id: score.candidate._id,
       name: score.candidate.name,
       issues: []
     }
     }
  acc[score.candidate._id].issues.push({
        _id: score.issue._id,
        title: score.issue.title,
        score: score.score
 })
 return acc;
