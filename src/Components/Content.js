


import React, { useEffect, useState } from 'react'
import db from '../firebase-config'
import { collection, doc, setDoc, getDocs, addDoc, orderBy, query, where, onSnapshot,Timestamp,serverTimestamp  } from "firebase/firestore"
import Icon from './Icon'
import icons from '../icons.json'
import Tweet from './Tweet'

const Content = () => {


  const [tweet, setTweet] = useState("");
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const tweetsRef = collection(db, "tweets");
    const q = query(collection(db, 'tweets'), orderBy('time',"desc"));
    onSnapshot(q, (snapshot) => {
      setTimeline(snapshot.docs.map(doc => doc.data()))
    })


    // getDocs(tweetsRef).then(snap => {
    //   setTimeline(snap.docs.map(data => data.data()))
    // })


  }, [])

  const publishTweet = () => {
    const testTweet = {
      name: "Serdar Cakir",
      username: "@serdarserdar",
      content: tweet,
      profilepic: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80g",
      time:serverTimestamp()
    }
    addDoc(collection(db, "tweets"), testTweet).then(alert("basarili"));

    setTweet("");
  }

  return (
    <main className=' flex-1  border-l-2 border-r-2 flex-col'>
      <div className='flex justify-between items-center sticky h-14 top-0 border-b z-50 bg-white px-4'>
        <h2 className='font-bold text-xl'>Latest Tweets</h2>
        <a href="#!" className='p-2 hover:bg-logo-hover rounded-full'>

          <Icon path={icons.stars} className='w-5 h-5  ' />
        </a>

      </div>
      <div className='flex border-b p-4 pb-0'>
        <div className='pr-2'>
          <img src='https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="w-12 h-12 rounded-full object-cover " alt="" />
        </div>
        <div className='flex-auto group'>
          <div className=''>
            <textarea name="" id="" placeholder='Whats happening?' cols="30" rows="2" className='placeholder-subtext text-lg outline-none resize-none w-full p-2 overflow-hidden  ' onChange={(e) => setTweet(e.target.value)} value={tweet}></textarea>
          </div>

          <div className='flex justify-between py-2 '>
            <div className='flex text-main'>
              <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover'><Icon path={icons.media} className='w-5 h-5 '></Icon></a>

              <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover'><Icon path={icons.gif} className='w-5 h-5 '></Icon> </a>

              <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover'> <Icon path={icons.poll} className='w-5 h-5 '></Icon></a>

              <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover'><Icon path={icons.emoji} path2={icons.emoji2} className='w-5 h-5 '></Icon> </a>

              <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover'><Icon path={icons.schedule} path2={icons.schedule2} path3={icons.schedule3} className='w-5 h-5 '></Icon> </a>
              <a href="#!" className='p-2 rounded-full disable '><Icon path={icons.location} path2={icons.location2} className='w-5 h-5'></Icon> </a>






            </div>
            <button className='bg-main text-white rounded-2xl px-4 font-bold disable group-focus-within:content-active ' onClick={() => publishTweet()}>
              Tweet
            </button>
          </div>
        </div>
      </div>



      {/* timeline */}

      {timeline.map((tweet, id) => {
        return (<Tweet info={tweet} key={id} />)
      })}



    </main>

  )
}

export default Content