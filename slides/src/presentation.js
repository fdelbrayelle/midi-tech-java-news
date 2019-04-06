// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  CodePane,
  Code
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#fd8224',
    quaternary: '#CECECE',
    quinary: 'yellow'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  javaDuke: require("./images/java-duke.svg"),
  javaLogo: require("./images/java-logo.png"),
  releases: require("./images/releases.png"),
  contribs: require("./images/jdk11-contribs.jpeg")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Midi tech
          </Heading>
          <Text margin="10px 0 0" textColor="quinary" size={1} fit bold>
            L'après Java 8, les nouveautés depuis Java 9 !
          </Text>
          <Text margin="200px 0 0" textColor="primary" textSize="24" bold>
            François Delbrayelle (@fdelbrayelle)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Bienvenue !
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Nouvelle saison des midis techniques</ListItem>
            <ListItem margin="30px 0 0">Sujet dense = questions à la fin =)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Sondage : qui utilise quelle version ?</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java évolue !</Heading>
          <Image margin="75px 300px 0" src={images.javaDuke} width={300}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Avant Java 10
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Releases de tailles trop importantes</ListItem>
            <ListItem margin="30px 0 0">Sorties trop espacées dans le temps</ListItem>
            <ListItem margin="30px 0 0">Nouvelles versions plus compliquées</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            À partir de Java 10
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Release train avec sortie tous les 6 mois</ListItem>
            <ListItem margin="30px 0 0">Release à date de ce qui est intégré</ListItem>
            <ListItem margin="30px 0 0">Moins de nouvelles fonctionnalités</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image margin="75px 0 0" src={images.releases}></Image>
          <Text size={6} margin="30px 0 0">Source : https://dzone.com/articles/what-the-future-java-releases-will-mean-for-legacy</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Support
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Support LTS toutes les 6 releases pour 3 ans</ListItem>
            <ListItem margin="30px 0 0">Support non LTS pour 6 mois</ListItem>
            <ListItem margin="30px 0 0">Support payant étendu possible par Oracle (licence par CPU ou par nom d'utilisateur)</ListItem>
            <ListItem margin="30px 0 0" textColor="red">Java 8 en fin de vie depuis janvier 2019 (support payant possible jusqu'en 2025)</ListItem>
            <ListItem margin="30px 0 0">https://www.oracle.com/technetwork/java/java-se-support-roadmap.html</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image margin="75px 40px 0" src={images.contribs} width={900}></Image>
          <Text size={6} margin="30px 0 0">Source : https://blogs.oracle.com/java-platform-group/building-jdk-11-together</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Quelle JDK ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Deux versions identiques en contenu, différentes en contrat : OpenJDK et OracleJDK</ListItem>
            <ListItem margin="30px 0 0">OpenJDK est open-source (version Oracle par défaut)</ListItem>
            <ListItem margin="30px 0 0">Support limité dans le temps mais gratuit pour OpenJDK</ListItem>
            <ListItem margin="30px 0 0">Autres JDKs avec support plus étendu : AdoptOpenJDK, Amazon Coretto, Azul, Eclipse OpenJ9, ...</ListItem>
            <ListItem margin="30px 0 0">https://openjdk.java.net/jeps/</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java SE 9</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            Septembre 2017
          </Text>
          <Image margin="75px 375px 0" src={images.javaLogo} width={200}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
            https://openjdk.java.net/projects/jdk9/
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Projet Jigsaw (Java Platform Module System) - JSR 376
          </Heading>
          <List>
            <ListItem margin="60px 0 0">JDK découpée en modules : <Code>java --list-modules</Code></ListItem>
            <ListItem margin="30px 0 0">Un module définit les services qu'il expose et les modules qu'il utilise (packages et ressources)</ListItem>
            <ListItem margin="30px 0 0">Nouveau fichier descripteur de modules à la racine des packages : <Code>module-info.java</Code></ListItem>
            <ListItem margin="30px 0 0">Par défaut, packages en privé dans les modules</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Projet Jigsaw (Java Platform Module System) - JSR 376
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Possibilité de créer une JRE personnalisée avec uniquement les modules nécessaires grâce à <Code>jlink</Code></ListItem>
            <ListItem margin="30px 0 0">Modules pas obligatoires si migration</ListItem>
            <ListItem margin="30px 0 0">Adaptés pour les architectures microservices</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Projet Jigsaw (Java Platform Module System) - JSR 376
          </Heading>
          <CodePane margin="60px 0 0" textSize="32" lang="java" source="module world.gfi.intranet {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              exports world.gfi.intranet.users;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              exports world.gfi.intranet.projects;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            }" theme="light">
          </CodePane>
          <CodePane textSize="32" lang="java" source="module world.gfi.cra {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              exports world.gfi.cra;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              requires world.gfi.intranet;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              requires org.apache.commons.lang3;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            }" theme="light">
          </CodePane>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Compilation AOT (Ahead-of-time) - JEP 295
          </Heading>
          <List>
            <ListItem margin="60px 0 0">JIT : JVM HotSpot exécute du bytecode et compile fréquemment le code exécuté vers du code natif</ListItem>
            <ListItem margin="30px 0 0">Compiler les classes en code natif avant de lancer la JVM</ListItem>
            <ListItem margin="30px 0 0">Commande <Code>jaotc</Code> après <Code>java</Code></ListItem>
            <ListItem margin="30px 0 0">Génération de fichiers librairies <Code>.so</Code></ListItem>
            <ListItem margin="30px 0 0">Graal(VM) (performances, notamment au démarrage)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Amélioration des performances
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Garbage-first collector (G1) - JEP 248 : GC par défaut</ListItem>
            <ListItem margin="30px 0 0">Compact Strings - JEP 254 (implémentation plus compacte si String ISO-8859-1 ou Latin-1). Avant : Une <Code>String</Code> était une séquence de <Code>char</Code> (unitairement stocké en interne en UTF-16 = 2 octets)</ListItem>
            <ListItem margin="30px 0 0">Indify String Concatenation - JEP 280 : intrasification de la concaténation des chaînes (utilisation de "+" optimisée)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Enhanced Deprecation - JEP 277
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Attribut <Code>since</Code> sur <Code>@Deprecated</Code> (depuis quelle version de Java ?)</ListItem>
            <ListItem margin="30px 0 0">Attribut <Code>forRemoval</Code> sur <Code>@Deprecated</Code> (indique la suppression future)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            "Sucre syntaxique" - JEP 213
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Autorisation des variables finales dans les <Code>try-with-resource</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>@SafeVarags</Code> sur méthodes privées (auparavant uniquement sur statiques ou finales)</ListItem>
            <ListItem margin="30px 0 0">Autorisation de l'opérateur diamant sur les classes abstraites quand le type est implicite</ListItem>
            <ListItem margin="30px 0 0">Méthodes privées dans les interfaces</ListItem>
            <ListItem margin="30px 0 0">Underscore interdit en tant qu'identifiant : <Code>int _ = "abc";</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            The Java Shell (a Java REPL) - JEP 222
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Read–eval–print loop (interpréteur en ligne de commandes)</ListItem>
            <ListItem margin="30px 0 0">Commande <Code>jshell</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Convenience Factory Methods for Collections - JEP 269
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Méthodes statiques pour créer des collections immutables</ListItem>
            <ListItem margin="30px 0 0">Petites collections (<Code>List</Code>, <Code>Set</Code>, <Code>Map</Code>)</ListItem>
            <ListItem margin="30px 0 0">Objectif : performances</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            More Concurrency Updates - JEP 266
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Implémentation des Reactive Streams via la classe <Code>Flow</Code></ListItem>
            <ListItem margin="30px 0 0">Programmation réactive : Publisher avec <Code>subscribe(Subscriber)</Code>, Subscriber avec <Code>onNext(T)</Code>, Subscription</ListItem>
            <ListItem margin="30px 0 0">Alternative à Vert.x, RxJava ou Akka</ListItem>
            <ListItem margin="30px 0 0">Améliorations pour l'API CompletableFuture (timeout, delay)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés Stream
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Stream::takeWhile</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Stream::dropWhile</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Stream::ofNullable</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Stream::iterate</Code> (avec un <Code>Predicate</Code> : boucle for standard)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés Collectors
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Collectors::filtering</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Collectors::flatMapping​</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés Optional
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Optional::or(Supplier)</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Optional::ifPresentOrElse(Consumer, Runnable)</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Optional::stream()</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés java.time
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>LocalDate::datesUntil(LocalDate)</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>LocalDate::datesUntil (LocalDate,Period)</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés Arrays
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Arrays.equals()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Arrays.compare()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Arrays.compareUnsigned()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Arrays.mismatch()</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés Process API
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Possibilité d'exécuter des commandes externes depuis Java</ListItem>
            <ListItem margin="30px 0 0">Compatible avec les différents OS supportés par Java</ListItem>
            <ListItem margin="30px 0 0">Processus de la JVM : <Code>ProcessHandle.current()</Code></ListItem>
            <ListItem margin="30px 0 0">Processus fils : <Code>Runtime.getRuntime().exec("...")</Code></ListItem>
            <ListItem margin="30px 0 0">Pipelines : <Code>find . -name *.java -type f | wc -l</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java SE 10</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            Mars 2018
          </Text>
          <Image margin="75px 375px 0" src={images.javaLogo} width={200}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
            https://openjdk.java.net/projects/jdk/10/
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Local-variable type inference - JEP 286
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Nouveau mot-clé <Code>var</Code> (variable locale uniquement)</ListItem>
            <ListItem margin="30px 0 0">Possibilité d'utiliser <Code>final</Code></ListItem>
            <ListItem margin="30px 0 0">Inutilisable avec l'opérateur diamant</ListItem>
            <ListItem margin="30px 0 0">Possible dans une boucle <Code>for</Code> ou un <Code>try-with-resource</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Collection Copy factory methods
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Nouvelles méthodes statiques <Code>copyOf</Code> sur les collections (<Code>List</Code>, <Code>Set</Code>, <Code>Map</Code>)</ListItem>
            <ListItem margin="30px 0 0">Retourne une collection immutable</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés diverses
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Collectors::toUnmodifiableList</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Optional.orElseThrow()</Code> : à préférer à <Code>Optional.get()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Reader.transferTo(Writer)</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Parallel full GC for G1 - JEP 307
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Auparavant Full GC mono-threadé pour nettoyer la heap</ListItem>
            <ListItem margin="30px 0 0">Nombre de threads avec <Code>-XX:ParallelGCThreads</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Application class-data sharing - JEP 310
          </Heading>
          <List>
            <ListItem margin="60px 0 0">CDS depuis JDK 1.5 seulement pour les classes système</ListItem>
            <ListItem margin="30px 0 0">Classes applicatives dans une archive partagée</ListItem>
            <ListItem margin="30px 0 0">Réduire le temps de démarrage</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java SE 11</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            Septembre 2018 (LTS)
          </Text>
          <Image margin="75px 375px 0" src={images.javaLogo} width={200}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
            https://openjdk.java.net/projects/jdk/11/
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Local-variable syntax for lambda parameters - JEP 323
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Utiliser des annotations sans perdre en concision</ListItem>
            <ListItem margin="30px 0 0"><Code>(var x, var y) -> x.process(y)</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            HTTP Client - JEP 321
          </Heading>
          <List>
            <ListItem margin="60px 0 0">En incubation dans Java 9 et 10</ListItem>
            <ListItem margin="30px 0 0">Nouvelle API pour remplacer <Code>HttpURLConnection</Code></ListItem>
            <ListItem margin="30px 0 0">Synchrone ou asynchrone (basé sur les <Code>CompletableFuture</Code>)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Launch Single-File Source-Code Programs - JEP 330
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Objectif : réduire la "cérémonie" (parfois inutile juste pour un simple test)</ListItem>
            <ListItem margin="30px 0 0">Possibilité d'utiliser <Code>java</Code> sans passer par <Code>javac</Code> (compilation en mémoire) : <Code>java MaClasse.java</Code></ListItem>
            <ListItem margin="30px 0 0">Scripts avec le shebang : <Code>#!/usr/bin/java</Code> : <Code>./ma-classe</Code> (sans extension)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés String
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>String::repeat</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::strip</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::stripLeading</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::stripTrailing</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::isBlank</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::lines</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés diverses
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>CharSequence::compareTo()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>StringBuilder::compareTo()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>StringBuffer::compareTo()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Reader::nullReader()</Code> et <Code>Writer::nullWriter()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>InputStream::readNBytes(int len)</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Pattern::asMatchPredicate </Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés diverses
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Optional::isEmpty() </Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Files::readString()</Code> et <Code>Files::writeString()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Predicate::not()</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>TimeUnit::convert(Duration)</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Collection::toArray()</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Flight recorder - JEP 328
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Produire et consommer des évènements (classe <Code>Event</Code> à étendre) pour la résolution d'incidents</ListItem>
            <ListItem margin="30px 0 0">Pour démarrer l'enregistrement : <Code>java -XX:StartFlightRecording</Code> ou via la commande <Code>jcmd</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Performances
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Optimisations sur le G1</ListItem>
            <ListItem margin="30px 0 0">ZGC - JEP 333 (expérimental, low-latency, big data)</ListItem>
            <ListItem margin="30px 0 0">Epsilon GC - JEP 318</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Supports divers
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Unicode 10.0 - JEP 327</ListItem>
            <ListItem margin="30px 0 0">Transport Layer Security (TLS) 1.3 - JEP 332</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Retraits
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Java FX (openjfx.io), Java EE (dont JAX-WS et JAXB) et CORBA retirés</ListItem>
            <ListItem margin="30px 0 0">Moteur JavaScript Nashorn introduit avec Java 8 (pour remplacer Rhino) : deprecated</ListItem>
            <ListItem margin="30px 0 0">Oracle ne fournit plus de JRE (donc plus de mises à jour automatiques)</ListItem>
            <ListItem margin="30px 0 0"><Code>java.lang.Thread.destroy()</Code> et <Code>java.lang.Thread.stop(java.lang.Throwable)</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java SE 12</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            Mars 2019
          </Text>
          <Image margin="75px 375px 0" src={images.javaLogo} width={200}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
            https://openjdk.java.net/projects/jdk/12/
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Extended Switch Statement/Expression - JEP 325
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>case</Code> à valeurs multiples : <Code>case MONDAY, FRIDAY, SUNDAY -> System.out.println(6);</Code></ListItem>
            <ListItem margin="30px 0 0">Affectation du résultat du <Code>switch</Code> dans une variable (<Code>break</Code> peut retourner une valeur)</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Démo !</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Nouveautés diverses
          </Heading>
          <List>
            <ListItem margin="60px 0 0"><Code>Collectors::teeing</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>String::align</Code>, <Code>String::indent</Code> et <Code>String::transform</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>Files::isSameFile</Code> et <Code>Files::mismatch</Code></ListItem>
            <ListItem margin="30px 0 0"><Code>java.text.CompactNumberFormat</Code> : norme LDML avec 1000 -> 1K, etc</ListItem>
            <ListItem margin="30px 0 0">Améliorations pour l'API CompletableFuture (nouvelles méthodes)</ListItem>
            <ListItem margin="30px 0 0">Support Unicode 11.0</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Performances
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Class-data sharing (CDS) par défaut</ListItem>
            <ListItem margin="30px 0 0">Abortable Mixed Collections for G1 - JEP 344</ListItem>
            <ListItem margin="30px 0 0">Promptly Return Unused Committed Memory from G1 - JEP 346</ListItem>
            <ListItem margin="30px 0 0">Shenandoah: A Low-Pause-Time Garbage Collector - JEP 189 (expérimental, big data)</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java SE 13, 14...</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            Septembre 2019, Mars 2020...
          </Text>
          <Image margin="75px 375px 0" src={images.javaLogo} width={200}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
            https://openjdk.java.net/projects/jdk/13/ ...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            En cours ou à venir
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Raw String Literals - JEP 326 : <Code>`chaîne sur plusieurs lignes`</Code></ListItem>
            <ListItem margin="30px 0 0">Pattern Matching for <Code>instanceof</Code> - JEP 305</ListItem>
            <ListItem margin="30px 0 0">Packaging Tool (<Code>jpackage</Code>) - JEP 343 : <Code>.msi</Code>, <Code>exe</Code>, <Code>deb</Code>, <Code>rpm</Code>...</ListItem>
            <ListItem margin="30px 0 0">Collection Literals - JEP 186 : <Code>var list = #[ 1, 2, 3 ];</Code></ListItem>
            <ListItem margin="30px 0 0">Foreign function interfaces (FFI) - JEP 191</ListItem>
            <ListItem margin="30px 0 0">Détails dans NullPointerException</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            En cours ou à venir
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Continuation & Fibers : alternative légère au <Code>Thread</Code></ListItem>
            <ListItem margin="30px 0 0">Concise Method Bodies : <Code>int length(String s) -> s.length();</Code></ListItem>
            <ListItem margin="30px 0 0">Execution de méthodes Java sur du GPU (Stream API) : machine/deep learning</ListItem>
            <ListItem margin="30px 0 0">Incubator Modules - JEP 11</ListItem>
            <ListItem margin="30px 0 0">Preview Language and VM Features - JEP 12 : <Code>--enable-preview</Code></ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Prochaine LTS : Java 17 (septembre 2021)</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Pour conclure !</Heading>
          <Image margin="75px 300px 0" src={images.javaDuke} width={300}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Pourquoi migrer ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Java 8 en fin de vie depuis janvier 2019</ListItem>
            <ListItem margin="30px 0 0">Performances largement améliorées</ListItem>
            <ListItem margin="30px 0 0">Mises à jour de sécurité</ListItem>
            <ListItem margin="30px 0 0">Nouvelles fonctionnalités (modules, <Code>jshell</Code>, <Code>var</Code>, ...)</ListItem>
            <ListItem margin="30px 0 0">Support intégral des containers (Docker)</ListItem>
            <ListItem margin="30px 0 0">Vers plus de programmation fonctionnelle, réactive...</ListItem>
            <ListItem margin="30px 0 0">Arrivée de Jakarta EE, Graal(VM)...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Comment migrer ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Se former, se renseigner</ListItem>
            <ListItem margin="30px 0 0">Échanges SecDevOps (impacts environnements ?)</ListItem>
            <ListItem margin="30px 0 0">Convaincre son équipe, son client</ListItem>
            <ListItem margin="30px 0 0">https://docs.oracle.com/en/java/javase/11/migrate/</ListItem>
            <ListItem margin="30px 0 0">https://blog.codefx.org/java/java-11-migration-guide/</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Comment migrer ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Télécharger OpenJDK 11 (ou une autre)</ListItem>
            <ListItem margin="30px 0 0">Mettre à jour l'IDE : IntelliJ IDEA >= 2018.3 ou Eclipse >= 2018-12</ListItem>
            <ListItem margin="30px 0 0">Mettre à jour Maven (>= 3.5.0) et Gradle (>= 5.0) et leurs plugins (maven-compiler-plugin >= 3.8.0)</ListItem>
            <ListItem margin="30px 0 0"><Code>rt.jar</Code>, <Code>tools.jar</Code> et <Code>dt.jar</Code> retirés dans Java SE 9 (JEP 220)</ListItem>
            <ListItem margin="30px 0 0">Mettre à jour les librairies (ajouter si besoin <Code>javax.xml.bind:jaxb-api:2.3.1</Code>)</ListItem>
            <ListItem margin="30px 0 0">Mettre à jour les <Code>Dockerfile</Code> (<Code>FROM openjdk/11</Code>)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Sources
          </Heading>
          <List>
            <ListItem margin="60px 0 0">https://openjdk.java.net</ListItem>
            <ListItem margin="30px 0 0">https://medium.com/@javachampions</ListItem>
            <ListItem margin="30px 0 0">https://www.loicmathieu.fr</ListItem>
            <ListItem margin="30px 0 0">https://www.baeldung.com</ListItem>
            <ListItem margin="30px 0 0">https://dzone.com</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Merci !</Heading>
          <Image margin="75px 325px 0" src={images.javaDuke} width={300}></Image>
        </Slide>
      </Deck>
    );
  }
}
