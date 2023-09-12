# GitHub Benutzerinformationen und Repositories Anwendun
## Einleitung
Diese Anwendung wurde entwickelt, um Benutzerinformationen und Repositories von GitHub anzuzeigen. Sie wurde mit React erstellt und verwendet verschiedene Pakete wie axios, saas, react-icons und react-paginate, um die Funktionalität und das Styling zu verbessern. Die Anwendung ermöglicht es Benutzern, nach GitHub-Benutzern oder Repositories zu suchen und detaillierte Informationen anzuzeigen.

## Komponenten
### Header
Die Header-Komponente zeigt das GitHub-Logo und ein Suchfeld an. Benutzer können nach GitHub-Benutzern oder Repositories suchen, indem sie einen Benutzernamen oder einen Repository-Namen eingeben. Wenn die Suche gestartet wird, navigiert die Anwendung zur entsprechenden Benutzer- oder Repository-Seite.

### ProfileData
Die ProfileData-Komponente zeigt Informationen zu einem GitHub-Benutzer an. Dazu gehören der Name des Benutzers, der Benutzername, das Profilbild, die Anzahl der Follower, die Anzahl der Personen, denen der Benutzer folgt, die Firma, der Standort, die E-Mail-Adresse und die Blog-URL. Diese Informationen werden in einer benutzerfreundlichen Darstellung präsentiert.

### RepoCard
Die RepoCard-Komponente zeigt Informationen zu einem GitHub-Repository an. Dazu gehören der Benutzername des Besitzers, der Repository-Name, eine kurze Beschreibung, die Programmiersprache, die Anzahl der Sterne und die Anzahl der Forks. Die Programmiersprache wird farblich hervorgehoben, und die Informationen werden in einem übersichtlichen Kartenformat dargestellt.

### Footer
Die Footer-Komponente zeigt das GitHub-Logo am unteren Rand der Seite an.

### Profile
Die _Profile_ -Komponente ist verantwortlich für die Anzeige von GitHub-Benutzerinformationen und deren Repositories.Sie können die Route-Parameter verwenden, um den Benutzernamen dynamisch festzulegen, oder einen Standardbenutzernamen (in diesem Fall "semihbeyzade") verwenden.

#### Zustand
Die Profile-Komponente verwendet React-Hooks, um den Zustand der Benutzerdaten und Repositories zu verwalten:

_userData_: Dieser Zustand enthält Informationen über den GitHub-Benutzer, einschließlich Name, Benutzername, Avatar, Anzahl der Follower, Anzahl der Personen, denen der Benutzer folgt, Firma, Standort, E-Mail und Blog-URL. Es kann auch eine Fehlermeldung enthalten, wenn ein Problem bei der Datenabfrage auftritt.

_currentPage_: Dieser Zustand wird verwendet, um die aktuelle Seite für die Repositories zu verfolgen, da sie paginiert sind.

### Repo
Die Repo-Komponente zeigt detaillierte Informationen zu einem einzelnen GitHub-Repository an. Benutzer gelangen zu dieser Seite, wenn sie auf den Namen eines Repositories auf der Profilseite klicken. Die Informationen umfassen die Repository-Beschreibung, die Anzahl der Sterne, die Anzahl der Forks und einen Link zum Repository auf GitHub.

### Routing
Die Anwendung verwendet die _react-router-dom_ -Bibliothek, um die Navigation zwischen verschiedenen Seiten zu ermöglichen. Es gibt drei Hauptseiten:

Die Profilseite, auf der Benutzerinformationen und Repositories angezeigt werden.
Die Repositoryseite, auf der detaillierte Informationen zu einem Repository angezeigt werden.
Die Startseite (Standard), auf der die Profilseite für einen Standardbenutzer ("semihbeyzade") angezeigt wird.

### Styling
Die Anwendung verwendet SCSS (Sass) für das Styling. Der _index.scss_ -Datei sind globale Stile definiert, die auf der gesamten Website angewendet werden. Die Farben und Stile wurden sorgfältig ausgewählt, um eine ansprechende Benutzeroberfläche zu erstellen.

### Datenabruf
Die Anwendung verwendet Axios, um Daten von der GitHub-API abzurufen. Bevor Daten abgerufen werden, wird der eingegebene Benutzername oder Repository-Name formatiert und an die entsprechende API-Endpunkt-URL gesendet.

#### fetchUserData Funktion
Die _fetchUserData_ Funktion ist eine Funktion, die in einem _useEffect_ verwendet wird und darauf abzielt, die Daten eines GitHub-Benutzers abzurufen.

1. _try-catch Block_: Zunächst wird ein try-catch-Block verwendet. Dieser Block wird verwendet, um Fehlerfälle abzufangen und mit ihnen umzugehen.

2. _Datenabruf_: Mit axios.get werden zwei separate Anfragen an die GitHub-API gesendet. Die erste Anfrage ruft allgemeine Informationen über den angegebenen Benutzer ab, während die zweite Anfrage alle Repositories des Benutzers abruft.

3. _404 Statusüberprüfung_: Wenn der Status der ersten Anfrage (status) 404 ist, bedeutet dies, dass der Benutzer nicht gefunden wurde. In diesem Fall wird eine Fehlermeldung festgelegt, und diese Fehlermeldung wird dem Benutzer mithilfe von setUserData angezeigt.

4. _Daten festlegen_: Wenn kein Fehler auftritt, werden die Antworten beider Anfragen abgerufen, und aus diesen Antworten werden die Benutzerinformationen und Repositories separat extrahiert. Anschließend werden diese Informationen mithilfe von _setUserData_ als Benutzerdaten festgelegt, und der Fehlerstatus wird auf null zurückgesetzt (_error: null_).

5. _Fehlerverwaltung_: Wenn ein Fehler auftritt, wird dieser mithilfe des _catch_-Blocks behandelt, und die Benutzerdaten werden mithilfe von _setUserData_ zurückgesetzt, während eine Fehlermeldung festgelegt wird.

#### fetchRepoData Funktion
Die _fetchRepoData_ Funktion ist eine Funktion, die in einem _useEffect_ verwendet wird und darauf abzielt, Daten eines GitHub-Repositorys abzurufen.

1. _try-catch Block_: Zunächst wird ein _try-catch_-Block verwendet. Dieser Block wird verwendet, um Fehlerfälle abzufangen und mit ihnen umzugehen.

2. _Datenabruf_: Mit _axios.get_ wird eine Anfrage an die GitHub-API gesendet, um die Daten des angegebenen Repositorys abzurufen.

3. _Fehlerüberprüfung und Datenfestlegung_: Wenn kein Fehler auftritt, wird die Antwort abgerufen und mithilfe von _setRepoData_ als Repository-Daten festgelegt. Außerdem wird der Ladezustand mit _setLoading(false)_ zurückgesetzt.

4. _Fehlerverwaltung_: Wenn ein Fehler auftritt, wird dieser mithilfe des _catch_-Blocks behandelt. Der Fehler wird in der Konsole protokolliert, die Repository-Daten werden zurückgesetzt, und der Ladezustand wird mit _setLoading(false)_ zurückgesetzt.

Diese Schemata erläutern die Arbeitsweise der _fetchUserData_ und _fetchRepoData_ Funktionen sowie den Datenfluss. Diese Funktionen werden in Ihrer React-Anwendung verwendet, um GitHub-API-Daten abzurufen.

### Paginierung
Die Repositories werden in einer paginierten Ansicht angezeigt. Die Anzahl der angezeigten Repositories pro Seite beträgt 8. Benutzer können zwischen den Seiten navigieren, um alle Repositories anzuzeigen.

### Fehlerbehandlung
Die Anwendung verfügt über eine Fehlerbehandlung, die sicherstellt, dass Benutzer über Fehler oder Probleme informiert werden. Wenn ein Benutzer nicht gefunden wird oder ein Fehler beim Abrufen von Daten auftritt, wird eine entsprechende Fehlermeldung angezeigt.

### Schlussbemerkungen
Diese GitHub-Benutzerinformations- und Repositories-Anwendung bietet eine benutzerfreundliche Möglichkeit, GitHub-Benutzerinformationen und Repository-Daten anzuzeigen. Sie ist gut strukturiert, ansprechend gestaltet und verwendet bewährte Techniken für die Entwicklung von React-Anwendungen.

Vielen Dank für die Verwendung dieser Anwendung! Bei Fragen oder Anregungen können Sie sich gerne an mich wenden.