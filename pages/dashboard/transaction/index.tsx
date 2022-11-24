import DashboardLayout from '../../../layout/dashboard';
export default function Transaction() {
  return (
    <DashboardLayout>
      <div className="relative px-4 w-full min-h-[1px] leading-5 text-left text-gray-500 md:flex-shrink-0 md:flex-grow-0 box-border">
        <div className="flex relative shadow-[rgba(0,_0,_0,_0.05)_0px_0px_0px_1px] flex-col mb-8 min-w-0 text-left break-words bg-clip-border bg-white rounded-sm box-border">
          <div className="flex items-center rounded-[3px_3px_0px_0px] min-h-[70px] self-center py-4 px-6 mb-0 w-full leading-7 bg-transparent border-b border-solid box-border border-stone-50 justify-between">
            <h4 className="pr-2 my-0  font-bold box-border text-lg">
              Dashboard
            </h4>
          </div>
          <div className="flex-auto py-5 px-6 text-gray-500 bg-transparent box-border">
            <div className="block overflow-x-auto w-full break-words box-border">
              <div className="mt-10">
                <h4 className="pr-2 mb-4  font-bold box-border text-lg">
                  Latest Orders
                </h4>
                <div className="text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
