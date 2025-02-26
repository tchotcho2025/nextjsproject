(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/Head"
var Head_ = __webpack_require__(7824);
var Head_default = /*#__PURE__*/__webpack_require__.n(Head_);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


function MeetupDetail(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                children: [
                    " ",
                    props.address,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    " ",
                    props.description,
                    " "
                ]
            })
        ]
    });
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js





function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: props.meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: props.meetupData.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                image: props.meetupData.image,
                title: props.meetupData.title,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    });
}
async function getStaticPaths() {
    // fetch data from a single meetup
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    // fetch data from a single meetup
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://hugodubled:VNuHdvlg1mvABOjy@cluster0.89odw.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails); /* 

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


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 7824:
/***/ ((module) => {

"use strict";
module.exports = require("next/Head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();