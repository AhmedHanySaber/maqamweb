import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(1).png?alt=media&token=bbcea0aa-acf4-4915-9b8d-6b46bed95156',
        name: 'Cairo'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(2).png?alt=media&token=d029b911-aae1-4a09-850b-74275b5d48bd',
        name: 'Sharqeyya'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(3).png?alt=media&token=e48f12c2-2cbf-4df7-b7bb-50de7a7ae926',
        name: 'Alexandria'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(4).png?alt=media&token=2f1e71cb-6690-4e9d-b500-67446746c3b6',
        name: 'Tanta'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(5).png?alt=media&token=475dd2d2-5a77-4e70-b46b-fe0c353080f8',
        name: 'Kafr al-Shaykh'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque%20(6).png?alt=media&token=f5045a7d-6109-424a-a371-2a168226d417',
        name: 'Humaythara'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/mosque.png?alt=media&token=fc1b6d21-2f80-4ebf-9e44-86c2d39fbaf3',
        name: 'Minya'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/maqamweb-b7853.appspot.com/o/prophet.png?alt=media&token=c6247eb3-70f8-42ee-9f00-a63dc751752f',
        name: 'sightseeing'
    },
  
]

// const Category = () => {
//     // naviaget 
//     const navigate = useNavigate();
//     return (
//         <div>
//             <div className="flex flex-col mt-5">
//                 {/* main 1 */}
//                 <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
//                     {/* main 2  */}
//                     <div className="flex ">
//                         {/* category  */}
//                         {category.map((item, index) => {
//                             return (
//                                 <div key={index} className="px-3 lg:px-10">
//                                     {/* Image  */}
//                                     <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 " >
//                                         <div className="flex justify-center mb-12">
//                                             {/* Image tag  */}
//                                             <img src={item.image} alt="img" />
//                                         </div>
//                                     </div>

//                                     {/* Name Text  */}
//                                     <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* style  */}
//             <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
//         </div>
//     );
// }

const Category = () => {
    const navigate = useNavigate();
  
    return (
      <div className="overflow-x-auto">
        <div className="flex mt-5 justify-center"> {/* Added justify-center */}
          {category.map((item, index) => (
            <div key={index} className="px-3 lg:px-10">
              <div
                onClick={() => navigate(`/category/${item.name}`)}
                className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-white-500 transition-all hover:bg-blue-400 cursor-pointer mb-1"
              >
                <div className="flex justify-center mb-12">
                  <img src={item.image} alt="Category" />
                </div>
              </div>
              <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  };


export default Category;

