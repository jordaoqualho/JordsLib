import NreEscolas from "pages/NRE/Escolas/index";
import NreSolicitacoes from "pages/NRE/Solicitacoes/index";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EscNotificacoes from "./Escola/Notificacoes/index";
import EscPerfil from "./Escola/Perfil/index";
import EscSolicitacoes from "./Escola/Solicitacoes/index";
import LoginScreen from "./Login";
import NotFound from "./NotFound";
import NreEscolasCadastro from "./NRE/CadastroEscola";
import NreEscolasEditar from "./NRE/EditarEscola";
import NreNotificacoes from "./NRE/Notificacoes/index";
import NreProfessores from "./NRE/Professores/index";
import NreVagas from "./NRE/Vagas/index";
import ProfNotificacoes from "./Professor/Notificacoes/index";
import ProfPerfil from "./Professor/Perfil/index";
import ProfVagas from "./Professor/Vagas/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "data/index";

function App() {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginScreen} />

            {/* Nre Routes */}
            <Route exact path="/nre-escolas" component={NreEscolas} />
            <Route
              exact
              path="/nre-escolas/cadastro"
              component={NreEscolasCadastro}
            />
            <Route
              exact
              path="/nre-escolas/editar/:idEscola"
              component={NreEscolasEditar}
            />
            <Route exact path="/nre-solicitacoes" component={NreSolicitacoes} />
            <Route exact path="/nre-professores" component={NreProfessores} />
            <Route exact path="/nre-notificacoes" component={NreNotificacoes} />
            <Route exact path="/nre-vagas" component={NreVagas} />

            {/* Professor Routes */}
            <Route exact path="/professor-vagas" component={ProfVagas} />
            <Route
              exact
              path="/professor-notificacoes"
              component={ProfNotificacoes}
            />
            <Route exact path="/professor-perfil" component={ProfPerfil} />

            {/* Escola Routes */}
            <Route
              exact
              path="/escola-solicitacoes"
              component={EscSolicitacoes}
            />
            <Route
              exact
              path="/escola-notificacoes"
              component={EscNotificacoes}
            />
            <Route exact path="/escola-perfil" component={EscPerfil} />

            {/* Not Found Page Route */}
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </PersistGate>
    </>
  );
}

export default App;
