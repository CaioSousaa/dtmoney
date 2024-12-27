import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/app";

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">$12.000</td>
            <td>Desenvolvimento</td>
            <td>17/12/2026</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- $1,100</td>
            <td>Casa</td>
            <td>17/12/2026</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
