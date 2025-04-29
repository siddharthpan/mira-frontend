// import { useState } from 'react';
// import axios from 'axios';
//
// export default function MockInterview() {
//     const [skill, setSkill] = useState('');
//     const [questions, setQuestions] = useState('');
//
//     const startInterview = async () => {
//         const res = await axios.post('https://<your-railway-backend-url>/candidate/mock-interview`, { skill });
//         setQuestions(res.data.questions);
//     };
//
//     return (
//         <div style={{ padding: '2rem' }}>
//             <h2>Mock Interview</h2>
//             <input type="text" placeholder="Skill (e.g., Python)" value={skill} onChange={(e) => setSkill(e.target.value)} />
//             <button onClick={startInterview}>Start Interview</button>
//             <div style={{ marginTop: '2rem' }}>
//                 <pre>{questions}</pre>
//             </div>
//         </div>
//     );
// }
