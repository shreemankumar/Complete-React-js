import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "google.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55, // dollars per hour
      location: "Odisha, India"
    },
    {
      brandLogo: "amazon.png",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 48,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "meta.png",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 50,
      location: "Pune, India"
    },
    {
      brandLogo: "apple.png",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Mumbai, India"
    },
    {
      brandLogo: "netflix.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Platform Engineer",
      tag1: "Fresher",
      tag2: "Senior Level",
      pay: 70,
      location: "Delhi, India"
    },
    {
      brandLogo: "microsoft.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Fresher (Women are welcome)",
      tag2: "Mid Level",
      pay: 58,
      location: "Kolkata, India"
    },
    {
      brandLogo: "tesla.png",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 52,
      location: "bangalore, India"
    },
    {
      brandLogo: "ibm.png",
      companyName: "IBM",
      datePosted: "2 months ago",
      post: "Java Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Madhapur, Hyderabad, India"
    },
    {
      brandLogo: "oracle.png",
      companyName: "Oracle",
      datePosted: "3 days ago",
      post: "Database Engineer",
      tag1: "Fresher (Internship)",
      tag2: "Senior Level",
      pay: 60,
      location: "madhya pradesh, India"
    },
    {
      brandLogo: "nvidia.png",
      companyName: "NVIDIA",
      datePosted: "8 weeks ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "chhattisgarh, India"
    }
  ];
  //App.jsx:114 Each child in a list should have a unique "key" prop. so that we use idx as key

  
  return (
    <div className='parent'>
      {jobOpenings.map(function(fun,idx){
        return <div key={idx}>
          <h1><Card company = {fun.companyName} datePosted = {fun.datePosted} post = {fun.post} tag1 = {fun.tag1} tag2 = {fun.tag2} pay = {fun.pay} location = {fun.location}/></h1>
        </div>
      })}
    </div>
  )
}

export default App