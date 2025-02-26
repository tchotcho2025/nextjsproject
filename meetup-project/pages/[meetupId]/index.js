import Head from "next/Head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <>
    <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </>
  );
}

export async function getStaticPaths() {
  // fetch data from a single meetup

  const client = await MongoClient.connect(
    "mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;


/* 

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
    
    export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params:{
                    meetupId:'m1',
                },
            },
            {
                params:{
                    meetupId:'m2',
                },
            },
            {
                params:{
                    meetupId:'m3',
                },
            },
        ]
    }
    
    export async  function getStaticProps(context){
    // fetch data from a single meetup
    const meetupId = context.params.meetupId;
         console.log(meetupId)
    
         return {
        props: {
            meetupData: {
                image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2297_-_M%C3%BCnchen_-_St_Peterskirche_and_Heiliggeistkirche_viewed_from_Frauenkirche.JPG',
                id : meetupId,
                title : 'First Meetup',
                address : 'Some Street 5, Some City',
                description : 'This is the first meetup'
            }
        },
        revalidate: 10
    };
    
    export default MeetupDetails;
    */


