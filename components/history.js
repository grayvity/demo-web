export default function History() {
  return (
    <>
      <div className=" w-full h-1/2 overflow-hidden">
        <div className=" bg-gradient-to-r from-white/50 to-white/20 w-full h-full rounded-2xl">
          <div className=" text-lg text-[#1F7171] font-bold pl-4 pt-4">
            Transaction History
          </div>
          <table>
            <tr>
              <th>Reciever</th>
              <th>Type</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Tesco Market</td>
              <td>Shopping</td>
              <td>Oct 1st</td>
              <td>$75</td>
            </tr>
            <tr>
              <td>Tesco Market</td>
              <td>Shopping</td>
              <td>Oct 1st</td>
              <td>$75</td>
            </tr>
            <tr>
              <td>Tesco Market</td>
              <td>Shopping</td>
              <td>Oct 1st</td>
              <td>$75</td>
            </tr>
            <tr>
              <td>Tesco Market</td>
              <td>Shopping</td>
              <td>Oct 1st</td>
              <td>$75</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
