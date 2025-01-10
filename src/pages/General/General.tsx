import CountCards from "../../components/CountCards/CountCards";
import "./General.css"
import { PieChart } from '@mui/x-charts/PieChart';
export default function General() {
  return (
    <main className="general">
      <div className="count-cards-container">
        <CountCards
          title="Nouvelles Réservations"
          count={20}
        ></CountCards>
        <CountCards
          title="Nouvelles Réservations"
          count={20}
        ></CountCards>
        <CountCards
          title="Nouvelles Réservations"
          count={20}
        ></CountCards>
        <CountCards
          title="Total des Réservations"
          count={20}
        ></CountCards>
        <CountCards title="Total clients" count={20}></CountCards>
        <CountCards
          title="Réservations annulées"
          count={20}
        ></CountCards>
      </div>
      <div className="Stat-container">

        <div className="email">
          <h2>Email:</h2>
        </div>
        <div className="gender">
          <PieChart
            colors={['rgba(255, 90, 208, 1)', 'blue', 'green']}
            series={[
              {
                data: [
                  { id: 2, value: 25, label: 'Female' },
                  { id: 0, value: 20, label: 'Male' },
                  { id: 1, value: 10, label: 'Helicopter' },
                ],
                innerRadius: 30,
              },
            ]}
            width={450}
            height={250}
          />
        </div>
      </div>
    </main>
  )
}