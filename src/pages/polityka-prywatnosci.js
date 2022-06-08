import React from "react";
import styled from "styled-components";
import Headline from "../components/atoms/Headline/Headline";
import Main from "../templates/Main";
import Text from "../components/atoms/Text/Text";

const PageHeader = styled.header`
  height: auto;
  padding: 200px 15px 0px 15px;
  text-align: center;
`;

const PageContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 100px 15px;
`;

const StyledHeadline = styled(Text)`
  font-size: ${({ theme }) => theme.headingM};
  margin: 30px 0 20px 0;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`;

const StyledList = styled.ul`
  padding-left: 40px;
`;

const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.bodyAlt};
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 140%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
  }
`;

const PrivacyPolicyPage = () => {
  return (
    <Main>
      <PageHeader>
        <Headline>POLITYKA PRYWATNOŚCI</Headline>
      </PageHeader>
      <PageContent>
        <Text>
          Poniższa Polityka Prywatności określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach
          Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną przez Administratora
          Serwisu.
        </Text>
        <StyledHeadline>§ 1 DEFINICJE</StyledHeadline>
        <StyledList>
          <StyledListItem>Serwis – serwis internetowy działający pod adresem https://codected.eu</StyledListItem>
          <StyledListItem>
            Serwis zewnętrzny – serwis internetowe partnerów, usługodawców lub usługobiorców Administratora
          </StyledListItem>
          <StyledListItem>
            Administrator – Damian Markiewicz, osoba świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu oraz
            przechowująca i uzyskująca dostęp do informacji w urządzeniach Użytkownika
          </StyledListItem>
          <StyledListItem>
            Użytkownik – osba fizyczna, dla której Administrator świadczy usługi drogą elektroniczna za pośrednictwem
            Serwisu.
          </StyledListItem>
          <StyledListItem>
            Urządzenie – elektroniczne urządzenie wraz z oprogramowaniem, za pośrednictwem, którego Użytkownik uzyskuje
            dostęp do Serwisu
          </StyledListItem>
          <StyledListItem>
            Cookies (ciasteczka) – dane tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu Użytkownika
          </StyledListItem>
        </StyledList>

        {/*  */}
        <StyledHeadline>§ 2 RODZAJE COOKIES</StyledHeadline>
        <StyledList>
          <StyledListItem>
            Cookies wewnętrzne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przes system
            teleinformatyczny Serwisu
          </StyledListItem>
          <StyledListItem>
            Cookies zewnętrzne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez systemy
            teleinformatyczne Serwisów zewnętrznych
          </StyledListItem>
          <StyledListItem>
            Cookies sesyjne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis lub Serwisy
            zewnętrzne podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia
            Użytkownika.
          </StyledListItem>
          <StyledListItem>
            Cookies trwałe – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis lub Serwisy
            zewnętrzne do momentu ich ręcznego usunięcia. Pliki nie są usuwane automatycznie po zakończeniu sesji
            Urządzenia chyba że konfiguracja Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie po
            zakończeniu sesji Urządzenia.
          </StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>§ 3 BEZPIECZEŃSTWO</StyledHeadline>
        <StyledList>
          <StyledListItem>
            Mechanizmy składowania i odczytu – Mechanizmy składowania i odczytu Cookies nie pozwalają na pobierania
            jakichkolwiek danych osobowych ani żadnych informacji poufnych z Urządzenia Użytkownika. Przeniesienie na
            Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest praktynie niemożliwe.
          </StyledListItem>
          <StyledListItem>
            Cookie wewnętrzne – zastosowane przez Administratora Cookie wewnętrzne są bezpieczne dla Urządzeń
            Użytkowników
          </StyledListItem>
          <StyledListItem>
            Cookie zewnętrzne – za bezpieczeństwo plików Cookie pochodzących od partnerów Serwisu Administrator nie
            ponosi odpowiedzialności. Lista partnerów zamieszczona jest w dalszej części Polityki Cookie.
          </StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>§ 4 CELE DO KTÓRYCH WYKORZYSTYWANE SĄ PLIKI COOKIE</StyledHeadline>
        <StyledList>
          <StyledListItem>
            Usprawnienie i ułatwienie dostępu do Serwisu – Administrator może przechowywać w plikach Cookie informacje o
            prefernecjach i ustawieniach użytkownika dotyczących Serwisu aby usprawnić, polepszyć i przyśpieszyć
            świadczenie usług w ramach Serwisu.
          </StyledListItem>
          <StyledListItem>
            Marketing i reklama – Administrator oraz Serwisy zewnętrzne wykorzystują pliki Cookie do celów
            marketingowych oraz serwowania reklam Użytkowników.
          </StyledListItem>
          <StyledListItem>
            Dane statystyczne – Administrator oraz Serwisy zewnętrzne wykorzystuje pliki Cookie do zbirania i
            przetwarzania danych statystycznych takich jak np. statystyki odwiedzin, statystyki Urządzeń Użytkowników
            czy statystyki zachowań użytkowników. Dane te zbierane są w celu analizy i ulepszania Serwisu.
          </StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>§ 5 SERWISY ZEWNĘTRZNE</StyledHeadline>
        <Text>
          Administrator współpracuje z następującymi serwisami zewnętrznymi, które mogą zamieszczać pliki Cookie na
          Urządzeniach Użytkownika:
        </Text>
        <StyledList>
          <StyledListItem>Google Analytics</StyledListItem>
          <StyledListItem>Google AdSense</StyledListItem>
          <StyledListItem>Google AdWords</StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>
          § 6 MOŻLIWOŚCI OKREŚLANIA WARUNKÓW PRZECHOWYWANIA I UZYSKIWANIA DOSTĘPU NA URZĄDZENIACH UŻYTKOWNIKA PRZEZ
          SERWIS I SERWISY ZEWNĘTRZNE
        </StyledHeadline>
        <StyledList>
          <StyledListItem>
            Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia dotyczące zapisywania, usuwania oraz
            dostępu do danych zapisanych plików Cookies
          </StyledListItem>
          <StyledListItem>
            Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych przeglądarkach komputerowych i urządzeń
            mobilnych dostępna są na stronie: https://jakwylaczyccookie.pl/
          </StyledListItem>
          <StyledListItem>
            Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie korzystając z narzędzi
            Urządzenia Użytkownika za pośrednictwem którego Użytkowanik korzysta z usług Serwisu.
          </StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>§ 7 WYMAGANIA SERWISU</StyledHeadline>
        <StyledList>
          <StyledListItem>
            Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może spowodować nieprawidłowe
            działanie niektórych funkcji Serwisu.
          </StyledListItem>
          <StyledListItem>
            Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające funkcje Serwisu w przypadku
            gdy Użytkownik ograniczy w jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.
          </StyledListItem>
        </StyledList>
        {/*  */}

        {/*  */}
        <StyledHeadline>§ 8 ZMIANY W POLITYCE PRYWATNOŚCI</StyledHeadline>
        <StyledList>
          <StyledListItem>
            Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Prywatności bez konieczności
            informowania o tym użytkowników.
          </StyledListItem>
          <StyledListItem>
            Wprowadzone zmiany w Polityce Prywatności zawsze będą publikowane na tej stronie.
          </StyledListItem>
          <StyledListItem>Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki Prywatności.</StyledListItem>
        </StyledList>
        {/*  */}
      </PageContent>
    </Main>
  );
};

export default PrivacyPolicyPage;
