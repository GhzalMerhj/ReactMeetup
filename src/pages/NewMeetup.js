// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup(){
    // const history = useHistory();
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
       fetch('https://react-start-fa3e9-default-rtdb.firebaseio.com/meetups.json',{
           method: 'POST',
           body:JSON.stringify(meetupData),
           headers:{
               'Content-Type' : 'application/json'
           }
       }).then(()=>{
        navigate('/');
       });

    }
    return (<section>
        <h1> Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>);
}
export default NewMeetup;
