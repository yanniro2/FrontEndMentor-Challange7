
import img_team from "./images/icon-team-builder.svg";
import img_super from "./images/icon-supervisor.svg";
import img_karma from "./images/icon-karma.svg";
import img_cal from "./images/icon-calculator.svg";

function App()
{
  return (
    <div className="App w-screen h-screen flex flex-col justify-center items-center font-popins sm:px-5">
      <div className="flex flex-col justify-center items-center text-center w-4/5 h-[90%] p-6 sm:w-full sm:p-0 sm:my-10">
        <div className="heading flex flex-col w-4/5 sm:w-full sm:my-10">
          <h3 className="text-large font-thin text-Grayish-Blue ">Reliable, efficient delivery</h3>

          <h1 className="text-large  font-popins font-bold text-Very-Dark-Blue"> Powered by Technology</h1>
          <p className="text-xs text-Grayish-Blue p-3 sm:text-xs  sm:my-2">  Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful</p>
        </div>
        <div className="box flex gap-1 text-left text-Very-Dark-Blue w-full h-full sm:flex-col">
          {/* Box */}
          <div className="box-1 w-1/3 h-100 flex items-center justify-center p-3 sm:w-full">
            {/* SuperVisor */}
            <div className="supervisor w-full h-50 flex flex-col shadow-2xl p-5 rounded border-t-4 border-Cyan gap-2 justify-between">
              <div className="text flex flex-col gap-2">
                <h4 className="font-bold">
                  Supervisor
                </h4>
                <p className="text-xs text-Grayish-Blue">

                  Monitors activity to identify project roadblocks
                </p>
              </div>

              <img src={img_super} alt="img icon" className="w-15 self-end justify-self-end" />
            </div>
          </div>
          {/* Box-2 */}
          <div className="box-2 w-1/3 h-full flex flex-col gap-5 items-center justify-center p-3 sm:w-full">
            {/* team */}
            <div className="team  w-full h-50 flex flex-col shadow-2xl p-5 rounded border-t-4 border-Red gap-2 justify-between ">
              <div className="text flex flex-col gap-2 ">
                <h4 className="font-bold"> Team Builder</h4>
                <p className="text-xs text-Grayish-Blue">Scans our talent network to create the optimal team for your project</p>
              </div>
              <img src={img_team} alt="img icon" className="w-15 self-end justify-self-end" />
            </div>

            {/* karma */}
            <div className="karma w-full h-50 flex flex-col shadow-2xl p-5 rounded border-t-4 border-Orange gap-2 justify-between">
              <div className="text flex flex-col gap-2">
                <h4 className="font-bold">
                  Karma
                </h4>
                <p className="text-xs text-Grayish-Blue">
                  Regularly evaluates our talent to ensure quality
                </p>
              </div>

              <img src={img_karma} alt="img icon" className="w-15 self-end justify-self-end" />
            </div>
          </div>

          {/* box-1 */}
          <div className="box-1  w-1/3 h-100 flex flex-col gap-10 items-center justify-center p-3 sm:w-full">
            {/* Calculator */}
            <div className="calculator w-full h-50 flex flex-col shadow-2xl p-5 rounded border-t-4 border-Blue gap-2 justify-between">
              <div className="text flex flex-col gap-2">
                <h4 className="font-bold">
                  Calculator
                </h4>
                <p className="text-xs text-Grayish-Blue">
                  Uses data from past projects to provide better delivery estimates
                </p>
              </div>

              <img src={img_cal} alt="img icon" className="w-15 self-end justify-self-end" />
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
