import React from 'react';
// import Typed from 'react-typed';


function MainPage() {
  return (
    <div className=' w-full h-screen relative' >
    <video className=" w-full h-full object-cover " src="../video/BG.mp4" autoPlay loop muted />
    <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
    <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4" >

    <div className="flex flex-col justify-center mb-11 " >
        <div className=" max-w-[400px] w-full mx-auto p-4" >
        {/* <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed> */}
            <h2 className="text-4xl font-bold m-2" >WELCOME</h2>

        </div>
    </div>
    </div>

</div> 

  )
}

export default MainPage
