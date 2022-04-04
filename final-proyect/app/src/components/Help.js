import { Header } from './elements'
import './Help.sass'
import Accordion from 'react-bootstrap/Accordion'

function Help({ onLogo, onProfile, onProgress, onHelp }) {
    return <>
        <div className='help'>
            <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />

            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

            <div className='acordeon'>
                <h1>Advices and Help</h1>
                <h2>These are ten very powerful practices to take care of yourself mentally</h2>
            </div>
            <div className='acordeon'>
                <h1>1.- Stand up and breathe</h1>
                <h2>Many times anxiety appears after a time of stress. To overcome anxiety it is important that you stop for a moment and take a deep breath. The world is not going to implode and nothing catastrophic is going to happen. Breathe slowly through your abdomen so that your body and mind relax naturally. Learning breathing techniques will help you avoid or control the anxiety attack.</h2>
            </div>
            <div className='acordeon'>
                <h1>2.- Relax</h1>
                <h2>Yoga and meditation have multiple benefits for your body and mind. With just half an hour a day you will feel more relaxed and have your ideas organized. There are many free guided meditation videos and programs on the Internet that can help you take the first step. Using relaxation techniques will also make you feel more prepared and understand how to reduce anxiety when it comes up.</h2>
            </div>
            <div className='acordeon'>
                <h1>3.- Maintain a healthy life</h1>
                <h2>Beyond being a cliché, a healthy body helps your mind work properly too. Physical exercise favors the release of serotonin and endorphins that will keep you in a good mood.

                    How to control anxiety through food? Prioritize foods with nutrients necessary for the nervous system, such as tryptophan, vitamin B and magnesium. Some of them are dark chocolate, banana, oatmeal or nuts.

                    It is also recommended that you try to reduce your intake of caffeine and theine by drinking less coffee, tea, energy drinks and soft drinks. Caffeine stimulates the nervous system and can aggravate symptoms of anxiety. Without a doubt, maintaining a healthy lifestyle is one of the fundamental principles of anxiety treatment.</h2>
            </div>
            <div className='acordeon'>
                <h1> 4.- Do not do several things at once</h1>
                <h2>Has it happened to you that while you were doing something you were also thinking about what you had to do next? Although it seems like an innocent practice, it contributes a lot to high levels of anxiety. Unconsciously you send a psychomotor signal of alert or concern to the brain and the level of anxiety rises. Thus, from the morning you overload yourself with everything you have to do throughout the day without realizing it.

                    To know how to combat anxiety , try to occupy yourself and focus on one thing, focusing on the here and now. If you have to eat, focus on eating. If you have to write a message, focus on writing the message and do not get distracted by the shopping list or what you are going to have for dinner.</h2>
            </div>
            <div className='acordeon'>
                <h1>5.- Get to know yourself</h1>
                <h2>If you have ever wondered how to control anxiety, the shortest answer may be this: get to know yourself. This is a key point in a therapy for anxiety . If you know how you feel and why you feel that way, you will be able to manage anxiety more effectively. It seems like very obvious advice, but if you are able to understand what is going on inside your mind, you will be able to control it.

                    In other words, it is not worth limiting yourself to “this happens to me”. Try to ask yourself what brings you to it, why it has happened now and what you can do so that it does not happen again. You will see that by managing your emotions you will be able to understand how to overcome anxiety and significantly improve your level of well-being.</h2>
            </div>
            <div className='acordeon'>
                <h1>6.- You are not a superhero</h1>
                <h2>It is important that you know how to say “no”. Many of those who suffer from chronic anxiety are unable to prioritize tasks or refuse favors. If it happens to you too, try ordering the activities from most to least urgent. Don't accept everything they ask of you either, if you can't handle it, it will contribute to raising your anxiety level.

                    Say no, delegate responsibilities and organize tasks. There are many insubstantial tasks whose alteration of the order is not going to change anything. If you have a pot on the fire that is burning, an important meeting tomorrow, and your sister's birthday is in a month, take care of the pot first and then make a plan for tomorrow. You can think about the gift another time. Here you can read more about exercises for anxiety.</h2>
            </div>
            <div className='acordeon'>
                <h1>7.- A shower</h1>
                <h2>Although it may not seem like it, a bath or shower will help calm anxiety. On the one hand, the hot water relaxes the muscles, also relieving rheumatic pain. As your body relaxes, your mind will too. On the other hand, cold water contracts the blood vessels and stimulates circulation, helping to fight against physical and mental fatigue. A cold shower will give you a good dose of energy to start the day. Anxiety is cured by also taking care of the small details of everyday life.</h2>
            </div>
            <div className='acordeon'>
                <h1>8.- Do not look for miracle solutions</h1>
                <h2>One of the most frequent mistakes when looking for the answer to how to eliminate anxiety is to want an instant solution, resorting to pills, alcohol, tobacco, etc. You should know that these remedies do not bring anything good to your body and there is a possibility that they accentuate the problem.

                    With tobacco, for example, you will feel that it is more difficult to know how to control your nerves since it is a stimulant. With alcohol, on the contrary, you will feel more down because it depresses the nervous system.

                    Do not take medications or herbal products on your own, as some of them may contain components that worsen anxiety symptoms. If you think you need medication or a food supplement, always consult a specialist.</h2>
            </div>
            <div className='acordeon'>
                <h1>9.- Get enough rest</h1>
                <h2>This is something very basic, but even so it is not given enough importance. Sleep does not translate into rest. Has it ever happened to you that in the morning you are tired despite having slept all night? Invest time in creating a suitable environment for rest and keep fixed schedules, as your body will appreciate it. If you have trouble relaxing and don't know how to avoid anxiety , you can resort to guided breathing exercises or meditation, take a hot shower or read a book.</h2>
            </div>
            <div className='acordeon'>
                <h1>10.- Talk to someone</h1>
                <h2>Dialogue is one of the keys to combat anxiety according to Buddhists. Find someone close, a family member or a friend and tell them what is happening to you. Sharing your thoughts and feelings with someone you trust will take a weight off your shoulders and reduce your stress level.

                    If at a certain moment you don't have anyone to talk to, grab a pen and paper and give free rein to your innermost thoughts and concerns. Nobody has to read what you write and, in addition, you can tear it up or throw it away later. However, it will help you unwind. Seeing a problem from a "third person" allows us to analyze it objectively, being a productive alternative to control anxiety.</h2>
            </div>

            <div>
                <h1>If you need professional help, you can contact one of the following associations. </h1>
            </div>
            <a className='link__help' href='https://fundacionanaed.org/'>Fundación Anaed</a>
            <a className='link__help' href='https://fundipp.org/depresion/'>Fundipp</a>
            <a className='link__help' href='https://www.mentesabiertas.org/'>Mentes Abiertas</a>
            <a className='link__help' href='https://sindepre.org/'>SinDepre</a>
            <a className='link__help' href='https://www.superar.org/'>Superar</a>
            <a className='link__help' href='https://fundipp.org/depresion/'>Fundipp</a>
        </div>
    </>
}

export default Help