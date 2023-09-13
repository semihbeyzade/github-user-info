# GitHub Benutzerinformationen und Repositories Anwendung
* [Der Link von Projekt](https://github-user-info-sigma.vercel.app/)

## Einleitung
Diese Anwendung wurde entwickelt, um Benutzerinformationen und Repositories von GitHub anzuzeigen. Sie wurde mit React erstellt und verwendet verschiedene Pakete wie **axios**, **saas**, **react-icons** und **react-paginate**, um die Funktionalität und das Styling zu verbessern. Die Anwendung ermöglicht es Benutzern, nach GitHub-Benutzern oder Repositories zu suchen und detaillierte Informationen anzuzeigen.

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
Die **Profile** -Komponente ist verantwortlich für die Anzeige von GitHub-Benutzerinformationen und deren Repositories.Sie können die Route-Parameter verwenden, um den Benutzernamen dynamisch festzulegen, oder einen Standardbenutzernamen (in diesem Fall "semihbeyzade") verwenden.

#### Zustand
Die Profile-Komponente verwendet React-Hooks, um den Zustand der Benutzerdaten und Repositories zu verwalten:

**userData**: Dieser Zustand enthält Informationen über den GitHub-Benutzer, einschließlich Name, Benutzername, Avatar, Anzahl der Follower, Anzahl der Personen, denen der Benutzer folgt, Firma, Standort, E-Mail und Blog-URL. Es kann auch eine Fehlermeldung enthalten, wenn ein Problem bei der Datenabfrage auftritt.

**currentPage**: Dieser Zustand wird verwendet, um die aktuelle Seite für die Repositories zu verfolgen, da sie paginiert sind.

### Repo
Die Repo-Komponente zeigt detaillierte Informationen zu einem einzelnen GitHub-Repository an. Benutzer gelangen zu dieser Seite, wenn sie auf den Namen eines Repositories auf der Profilseite klicken. Die Informationen umfassen die Repository-Beschreibung, die Anzahl der Sterne, die Anzahl der Forks und einen Link zum Repository auf GitHub.

### Routing
Die Anwendung verwendet die **react-router-dom** -Bibliothek, um die Navigation zwischen verschiedenen Seiten zu ermöglichen. Es gibt drei Hauptseiten:

Die Profilseite, auf der Benutzerinformationen und Repositories angezeigt werden.
Die Repositoryseite, auf der detaillierte Informationen zu einem Repository angezeigt werden.
Die Startseite (Standard), auf der die Profilseite für einen Standardbenutzer ("semihbeyzade") angezeigt wird.

### Styling
Die Anwendung verwendet SCSS (Sass) für das Styling. Der **index.scss** -Datei sind globale Stile definiert, die auf der gesamten Website angewendet werden. Die Farben und Stile wurden sorgfältig ausgewählt, um eine ansprechende Benutzeroberfläche zu erstellen.

### Datenabruf
Die Anwendung verwendet Axios, um Daten von der GitHub-API abzurufen. Bevor Daten abgerufen werden, wird der eingegebene Benutzername oder Repository-Name formatiert und an die entsprechende API-Endpunkt-URL gesendet.

#### fetchUserData Funktion
Die **fetchUserData** Funktion ist eine Funktion, die in einem **useEffect** verwendet wird und darauf abzielt, die Daten eines GitHub-Benutzers abzurufen.

1. **try-catch Block**: Zunächst wird ein try-catch-Block verwendet. Dieser Block wird verwendet, um Fehlerfälle abzufangen und mit ihnen umzugehen.

2. **Datenabruf**: Mit axios.get werden zwei separate Anfragen an die GitHub-API gesendet. Die erste Anfrage ruft allgemeine Informationen über den angegebenen Benutzer ab, während die zweite Anfrage alle Repositories des Benutzers abruft.

3. **404 Statusüberprüfung**: Wenn der Status der ersten Anfrage (status) 404 ist, bedeutet dies, dass der Benutzer nicht gefunden wurde. In diesem Fall wird eine Fehlermeldung festgelegt, und diese Fehlermeldung wird dem Benutzer mithilfe von setUserData angezeigt.

4. **Daten festlegen**: Wenn kein Fehler auftritt, werden die Antworten beider Anfragen abgerufen, und aus diesen Antworten werden die Benutzerinformationen und Repositories separat extrahiert. Anschließend werden diese Informationen mithilfe von **setUserData** als Benutzerdaten festgelegt, und der Fehlerstatus wird auf null zurückgesetzt (**error: null**).

5. **Fehlerverwaltung**: Wenn ein Fehler auftritt, wird dieser mithilfe des **catch**-Blocks behandelt, und die Benutzerdaten werden mithilfe von _setUserData_ zurückgesetzt, während eine Fehlermeldung festgelegt wird.

#### fetchRepoData Funktion
Die **fetchRepoData** Funktion ist eine Funktion, die in einem **useEffect** verwendet wird und darauf abzielt, Daten eines GitHub-Repositorys abzurufen.

1. **try-catch Block**: Zunächst wird ein **try-catch**-Block verwendet. Dieser Block wird verwendet, um Fehlerfälle abzufangen und mit ihnen umzugehen.

2. **Datenabruf**: Mit **axios.get** wird eine Anfrage an die GitHub-API gesendet, um die Daten des angegebenen Repositorys abzurufen.

3. **Fehlerüberprüfung und Datenfestlegung**: Wenn kein Fehler auftritt, wird die Antwort abgerufen und mithilfe von **setRepoData** als Repository-Daten festgelegt. Außerdem wird der Ladezustand mit **setLoading(false)** zurückgesetzt.

4. _Fehlerverwaltung_: Wenn ein Fehler auftritt, wird dieser mithilfe des **catch**-Blocks behandelt. Der Fehler wird in der Konsole protokolliert, die Repository-Daten werden zurückgesetzt, und der Ladezustand wird mit **setLoading(false)** zurückgesetzt.

Diese Schemata erläutern die Arbeitsweise der **fetchUserData** und **fetchRepoData** Funktionen sowie den Datenfluss. Diese Funktionen werden in Ihrer React-Anwendung verwendet, um GitHub-API-Daten abzurufen.

### Paginierung
Die Repositories werden in einer paginierten Ansicht angezeigt. Die Anzahl der angezeigten Repositories pro Seite beträgt 8. Benutzer können zwischen den Seiten navigieren, um alle Repositories anzuzeigen.

### Fehlerbehandlung
Die Anwendung verfügt über eine Fehlerbehandlung, die sicherstellt, dass Benutzer über Fehler oder Probleme informiert werden. Wenn ein Benutzer nicht gefunden wird oder ein Fehler beim Abrufen von Daten auftritt, wird eine entsprechende Fehlermeldung angezeigt.

### Schlussbemerkungen
Diese GitHub-Benutzerinformations- und Repositories-Anwendung bietet eine benutzerfreundliche Möglichkeit, GitHub-Benutzerinformationen und Repository-Daten anzuzeigen. Sie ist gut strukturiert, ansprechend gestaltet und verwendet bewährte Techniken für die Entwicklung von React-Anwendungen.

Vielen Dank für die Verwendung dieser Anwendung! Bei Fragen oder Anregungen können Sie sich gerne an mich wenden.
