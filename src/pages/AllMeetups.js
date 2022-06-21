import { useState , useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
{
id:'m1',
title:'this is the first meet up  title ',
image:'this is the url of the first meetup image ',
address: 'first meet up address ',
description: 'first meetup description '
},
{
    id:'m2',
    title:'this is the second meet up title',
    image:'this is the url of the second meetup image ',
    address: 'second meet up address ',
    description: 'second meetup description '
}];
function AllMeetups(){
    const [isLoading , setIsLoading] = useState(true);
    const [loadedMeetups , setLoadedMeetups] = useState([]);
     
    useEffect(()=>{ 
        setIsLoading(true);
        fetch('https://react-start-fa3e9-default-rtdb.firebaseio.com/meetups.json')
        .then( response => {
             return response.json();
            })
        .then( (data) => {
            const meetups = [];
            for(const key in data ){
                const meetup = {
                    id: key,
                    ...data[key]
                };
             meetups.push(meetup);   
            }
                setIsLoading(false);
                setLoadedMeetups(meetups);
        });
    } ,
    [

    ]);

  

    if(isLoading){
        return <section> <p> loading .... </p></section>
    }
    return <section> 
        <h1>All Meetups  </h1>
         {/* <ul>
             { DUMMY_DATA.map((meetup) => {
                 return <li key={meetup.id}> { meetup.title} </li>
             })}
         </ul> */}
         <MeetupList meetups={loadedMeetups} />
         </section>;
}
export default AllMeetups;
