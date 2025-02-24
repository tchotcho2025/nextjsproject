import Head from 'next/Head';
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
//import {useEffect, useState} from 'react'

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2297_-_M%C3%BCnchen_-_St_Peterskirche_and_Heiliggeistkirche_viewed_from_Frauenkirche.JPG/800px-2297_-_M%C3%BCnchen_-_St_Peterskirche_and_Heiliggeistkirche_viewed_from_Frauenkirche.JPG",
    address: "Some address 5, 20175 Muenchen",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/M%C3%BCnchen_-_HVB-Tower.jpg/1024px-M%C3%BCnchen_-_HVB-Tower.jpg",
    address: "Some address 15, 10754 FrankFurt",
    description: "This is a Second meetup!",
  },

  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpassingthru.com%2Fwp-content%2Fuploads%2F2018%2F10%2F1024px-Stadtbild_Munchen-wikipedia.jpg&f=1&nofb=1&ipt=35e4adaaa4af2bc626c82ce9f2ad216aa84a96eb9efb2bfe664ac4447dbef7b6&ipo=images",
    address: "Some address 85, 1014 Muenchen",
    description: "This is a Third meetup!",
  },
];

function HomePage(props) {
  /*const [loadedMeetups, setLoadedMeetups] = useState([]);

   useEffect(()=>{
    // send a http request and fetch data
     setLoadedMeetups(DUMMY_MEETUPS);
   }, [])*/

  return (
    <>
    <Head>
        <title>React Meetups</title>
        <meta
            name="description"
            content="Browse a huge list of highly active React meetups"
        />
    </Head>
    <MeetupList meetups={props.meetups} />
    </>
  );
}

/*export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}*/

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        //id:meetup.id,
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
