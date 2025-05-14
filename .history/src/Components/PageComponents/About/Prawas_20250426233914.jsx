import React from 'react'
const TimelineEvent = () => {
  const years = [1919, '2022-23', 2024, 2025];
  const events = {
    1919: {
      date: '१ मे १९१९',
      title: 'इतिहास',
      description: 'ही ऐतिहासिक घटना आहे ज्याने आपल्या देशाच्या स्वातंत्र्य चळवळीला गती दिली.',
      images: [
        '/images/1919-1.jpg',
        '/images/1919-2.jpg',
        '/images/1919-3.jpg',
      ],
    },
    '2022-23': {
      date: '१ मे २०२२-२३',
      title: 'साहित्य महोत्सव',
      description: 'या कालावधीत विविध साहित्यकृतींचा गौरव करण्यात आला.',
      images: [
        '/images/2022-1.jpg',
        '/images/2022-2.jpg',
        '/images/2022-3.jpg',
      ],
    },
    2024: {
      date: '१ मे २०२४',
      title: 'कविता महोत्सव',
      description: 'हा एक साहित्यिक उत्सव आहे ज्यामध्ये विविध कवी आपली कविता सादर करतात. या महोत्सवात विविध विषयांवर आधारित कविता ऐकायला मिळतात आणि नवीन प्रतिभावान कवींना एक व्यासपीठ मिळते. रसिक प्रेक्षकांसाठी हा एक सांस्कृतिक आनंदाचा अनुभव असतो.',
      images: [
        '/images/2024-1.jpg',
        '/images/2024-2.jpg',
        '/images/2024-3.jpg',
      ],
    },
    2025: {
      date: '१ मे २०२५',
      title: 'नवीन पर्व',
      description: 'या वर्षी नवीन सांस्कृतिक उपक्रम राबवण्यात आले.',
      images: [
        '/images/2025-1.jpg',
        '/images/2025-2.jpg',
        '/images/2025-3.jpg',
      ],
    },
  };

const Prawas = () => {

return (



  <div className='Prawas-Container'>
   <h2><span>आमचा</span>प्रवास</h2>



  </div>
)

}

export default Prawas;