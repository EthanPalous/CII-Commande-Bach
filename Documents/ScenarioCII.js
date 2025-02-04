{
	loadProgress();
}

Nom_compagnie = "<nom>CII</nom>";
niveau_debut = 0;
tabulation = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
date_jeu = "2020-01-14 14:17 ";
jours = 18386;//depuis le 13/09/69

Nom1 = "Recoque";
Prenom1 = "Alice";
nomprenom1 = "alicerecoque";
mail1 = "arecoque";
Nom2 = "Ichbiah";
Prenom2 = "Jean";
nomprenom2 = "jeanichbiah";
mail2 = "jichbiah";
Nom3 = "Pouzin";
Prenom3 = "Louis";
nomprenom3 = "louispouzin";
mail3 = "lpouzin";
Nom4 = "Elie";
Prenom4 = "Michel";
nomprenom4 = "michelelie";
mail4 = "melie";
Nom5 = "Deloche";
Prenom5 = "Gerard";
nomprenom5 = "gerarddeloche";
mail5 = "gdeloche";
Nom6 = "Danzin";
Prenom6 = "Andre";
nomprenom6 = "andredanzin";
mail6 = "adanzin";
Nom7 = "Quatze";
Prenom7 = "Jesse";
nomprenom7 = "jessequatze";
mail7 = "jquatze";
Prenom8 = "Mathieu";

message_intro_lvl0 = "</br>Vous êtes sur un terminal de la compagnie gouvernementale "+Nom_compagnie+".</br>Connectez-vous à votre compte "+Nom_compagnie+" pour continuer.</br>";
message_intro_lvl1 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Bienvenue à "+Nom_compagnie+", "+Prenom1+" "+Nom1+".</br>Vous avez été absente pendant "+jours.toString()+" jours, nous sommes heureux de vous revoir.</br>A "+Nom_compagnie+", il vous sera demandé de chercher des données dans des fichiers qui vous seront donnés.</br>Pour valider vos aptitudes, vous devrez trouver des mots de passe et vous connecter avec ceux-ci.</br></br><niveau>Astuce : vous pouvez utiliser les touches haut et bas pour rappeler les commandes précédemment utilisées.</niveau></br>";
message_intro_lvl2 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Nous sommes surpris que vous ayez réussi ce test connaissant votre état critique.</br>Certains fichiers des terminaux du réseau "+Nom_compagnie+" peuvent être cachés.</br>Vous devez apprendre à trouver et lire ce type de fichiers.</br></br><niveau>Astuce : la commande ls a plusieurs options. Découvrez les à l'aide de la commande man.</niveau></br>";
message_intro_lvl3 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Vous êtes déroutante "+Prenom1+" "+Nom1+".</br>A "+Nom_compagnie+", il y a différents niveaux d'accréditation.</br>Il est très important que vous appreniez à les utiliser.</br>Vous aurez aussi besoin de savoir lancer une commande en mode administrateur.</br> Etant donné votre condition, il serait surprenant que vous y parveniez.</br></br><niveau>Astuce : apprenez en plus sur les commandes chmod et sudo avec l'instruction man.</niveau></br>";
message_intro_lvl4 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Très impressionnant, "+Prenom1+" "+Nom1+".</br>Vous venez de franchir un test important.</br>Les terminaux du réseau de "+Nom_compagnie+" possèdent presque toujours une arborescence de dossiers.</br>Vous devez apprendre à vous déplacer dans ces dossiers.</br></br><niveau>Astuce : apprenez en plus sur la commande cd avec l'instruction man.</niveau></br>";
message_intro_lvl5 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Remarquable, "+Prenom1+" "+Nom1+". Même dans votre état vous restez un des meilleurs éléments de cette compagnie.</br>Pour valider votre test d'aptitude, vous allez devoir comprendre comment créer un nouveau dossier et y déplacer des fichiers.</br></br><niveau>Astuce : apprenez en plus sur les commandes mkdir et mv avec l'instruction man.</niveau></br>";
message_intro_lvl6 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>C'est remarquable.</br>Votre test d'aptitudes a été validé, malgré des statistiques très défavorables.</br></br><niveau>=== SECTEUR HAUT - NIVEAU 01 ===</niveau></br></br>Vous avez été connecté à votre ordinateur personnel, "+Prenom1+" "+Nom1+".</br></br><erreur>ERREUR : vos fichiers personnels ont été bloqués.</erreur></br>"+jours.toString()+" jours se sont écoulés depuis votre dernière connexion.</br>Vous devez saisir votre date de naissance pour confirmer votre identité, "+Prenom1+" "+Nom1+".</br>Utilisez la commande <special>unlock</special> quand vous serez prêt à confirmer votre identité.</br>";
message_intro_lvl7 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br>Votre compte a été déverouillé avec succès.</br>"+Nom_compagnie+" est assez vaste et vous allez devoir utiliser une carte pour vous repérer</br>dans le réseau.</br>Nous vous rappelons que votre ordinateur est localisé au niveau 01 dans le secteur 01.</br></br>Il y a un verrou virtuel sur un ordinateur du niveau 02 dans le secteur 01.</br>Connectez-vous à un ordinateur du niveau 02 pour réparer cela.</br></br><niveau>Astuce : apprenez en plus sur la commande ssh avec l'instruction man.</niveau></br></br>";
message_intro_lvl8 = "</br>"+tabulation+"<correct>----------------</correct></br>"+tabulation+"<correct> Accès autorisé</correct></br>"+tabulation+"<correct>----------------</correct></br></br><niveau>=== SECTEUR HAUT - NIVEAU 02 ===</niveau></br></br>Très bon travail !</br>Ce jeu s'arrête ici.</br>Si vous souhaitez poursuivre l'aventure, ce jeu est largement inspiré du principe du jeu en ligne MU Complex."

message_invitemotdepasse = "<saisie>Mot de passe ?</saisie> ";
message_erreurmotdepasse = "<erreur>Mot de passe incorrect</erreur>";
message_aidelogin = "<special>login</special> : connexion au système";
message_aideunlock = "<special>unlock</special> : confirme votre identité en donnant votre date de naissance";
message_aideup = "<special>up</special> : affiche les informations du système";
message_aidels = "<special>ls</special> : affiche la liste des fichiers et dossiers";
message_aidecd = "<special>cd</special> : change de dossier courant";
message_aidecat = "<special>cat</special> : affiche le contenu d'un fichier";
message_aidemkdir = "<special>mkdir</special> : crée un nouveau dossier";
message_aidemv = "<special>mv</special> : déplace un fichier";
message_aidessh = "<special>ssh</special> : se connecte à un autre ordinateur";
message_aidesudo = "<special>sudo</special> : lance une commande en mode administrateur";
message_aidechmod = "<special>chmod</special> : change les permissions d'accès à un fichier ou à un dossier";
message_aideman = "<special>man</special> : affiche l'aide relative à une commande";
message_aidemanhelp = "<special>help</special> : affiche les commandes autorisées à ce niveau";
message_aidemanman = "<special>man [commande]</special> : affiche l'aide relative à une commande";
message_aidemanls = "<special>ls [options] [dossier]</special> : liste le contenu de [dossier]</br></br><special>[dossier]</special></br>saisir le chemin d'accès complet du dossier</br>si non spécifié, affiche le contenu du répertoire courant</br></br><special>[options]</special></br><special>-l</special> liste les attributs (les droits de lecture, d'écriture et d'exécution, le propriétaire, le groupe propriétaire, la taille en octets, la date et l'heure de création ou de modification) des éléments du dossier</br><special>-a</special> liste tout le contenu du dossier, y compris les éléments cachés";
message_aidemancat = "<special>cat [fichier]</special> : affiche le contenu de [fichier]</br></br><special>[fichier]</special></br>saisir le chemin d'accès complet du fichier</br>ou bien directement le nom du fichier si c'est un élément du répertoire courant";
message_aidemancd = "<special>cd [dossier]</special> : accède à [dossier]</br></br><special>[dossier]</special></br>saisir le chemin d'accès complet du dossier</br>ou bien directement le nom du dossier si c'est un élément du répertoire courant</br><special>/</special> : désigne le dossier racine de l'arborescence</br><special>..</special> : désigne le dossier parent";
message_aidemanmkdir = "<special>mkdir [dossier]</special> : crée le répertoire [dossier]";
message_aidemanmv = "<special>mv [fichier] [dossier]</special> : déplace un fichier dans un dossier";
message_aidemansudo = "<special>sudo [commande]</special> : lance [commande] en mode administrateur";
message_aidemanchmod = "<special>chmod [options] [fichier ou dossier]</special> : permet à l'administrateur de changer les permissions d'accès à [fichier] (ou à [dossier])</br></br><special>[fichier ou dossier]</special></br>saisir le chemin d'accès complet du fichier ou du dossier</br>ou bien seulement son nom s'il s'agit d'un élément du répertoire courant</br></br><special>[options]</special></br>Qui subit le changement :</br><special>u</special> : le 'propriétaire'</br><special>g</special> : le 'groupe propriétaire'</br><special>o</special> : le 'reste du monde'</br>Quelle modification faire :</br><special>+</special> : ajouter</br><special>-</special> : supprimer</br>Quel droit veut-on modifier :</br><special>r</special> : lecture</br><special>w</special> : écriture</br><special>x</special> : exécution";
message_aidemanssh = "<special>ssh [utilisateur]</special> : se connecte en tant que [utilisateur] à un ordinateur distant";
message_aidehelp = "<special>help</special> : affiche cette aide";
message_aidemotd = "<special>motd</special> : réaffiche le message d'introduction";
message_aidecommand = "Saisissez votre <special>commande</special> ci-dessous et appuyez sur Entrée pour l'exécuter";
message_afficheimage = "<saisie>Cette image a été affichée dans une autre fenêtre</saisie>";
message_erreuradmin = "<erreur>Vous devez être administrateur pour utiliser cette commande</erreur>";
message_erreuradmincat = "<erreur>Vous n'êtes pas autorisé à lire ce fichier</erreur>";
message_erreuradmincd = "<erreur>Vous n'êtes pas autorisé à accéder à ce dossier</erreur>";

liste_commande_login = ["login"];
liste_commande_up = ["up","sudo up"];
liste_commande_ls_root = ["ls", "ls /"];
liste_commande_ls_root_sudo = ["sudo ls","sudo ls /"];
liste_commande_ls_root_admin = liste_commande_ls_root.concat(liste_commande_ls_root_sudo);
liste_commande_lsa_root = ["ls -a","ls -a /"];
liste_commande_lsa_root_sudo = ["sudo ls -a","sudo ls -a /"];
liste_commande_lsa_root_admin = liste_commande_lsa_root.concat(liste_commande_lsa_root_sudo);
liste_commande_lsl_root = ["ls -l","ls -l /"];
liste_commande_lsl_root_sudo = ["sudo ls -l","sudo ls -l /"];
liste_commande_lsl_root_admin = liste_commande_lsl_root.concat(liste_commande_lsl_root_sudo);
liste_commande_lsla_root = ["ls -a -l","ls -a -l /","ls -l -a", "ls -l -a /"];
liste_commande_lsla_root_sudo = ["sudo ls -a -l","sudo ls -a -l /","sudo ls -l -a","sudo ls -l -a /"];
liste_commande_lsla_root_admin = liste_commande_lsla_root.concat(liste_commande_lsla_root_sudo);
liste_commande_cdpp = ["cd ..","cd /","cd ../"];
liste_commande_cdpp_sudo = ["sudo cd ..","sudo cd /","sudo cd ../"];
liste_commande_cdpp_admin = liste_commande_cdpp.concat(liste_commande_cdpp_sudo);
liste_commande_help = ["help","sudo help"];
liste_commande_motd = ["motd","sudo motd"];
liste_commande_manls = ["man ls","sudo man ls"];
liste_commande_mancat = ["man cat","sudo man cat"];
liste_commande_mancd = ["man cd","sudo man cd"];
liste_commande_manmkdir = ["man mkdir","sudo man mkdir"];
liste_commande_manmv = ["man mv","sudo man mv"];
liste_commande_manchmod = ["man chmod","sudo man chmod"];
liste_commande_mansudo = ["man sudo","sudo man sudo"];
liste_commande_manssh = ["man ssh","sudo man ssh"];
liste_commande_manman = ["man","man man","sudo man","sudo man man"];
liste_commande_manhelp = ["man help","sudo man help"];

var construire_listes_ls = function (dossier) {
	return {   
		ls_root_rep: ["ls "+dossier,"ls /"+dossier],
		ls_root_rep_sudo: ["sudo ls "+dossier,"sudo ls /"+dossier],
		ls_root_rep_admin: ["ls "+dossier,"ls /"+dossier,"sudo ls "+dossier,"sudo ls /"+dossier],
		lsa_root_rep: ["ls -a "+dossier,"ls -a /"+dossier],
		lsa_root_rep_sudo: ["sudo ls -a "+dossier,"sudo ls -a /"+dossier],
		lsa_root_rep_admin: ["ls -a "+dossier,"ls -a /"+dossier,"sudo ls -a "+dossier,"sudo ls -a /"+dossier],
		lsl_root_rep: ["ls -l "+dossier,"ls -l /"+dossier],
		lsl_root_rep_sudo: ["sudo ls -l "+dossier,"sudo ls -l /"+dossier],
		lsl_root_rep_admin: ["ls -l "+dossier,"ls -l /"+dossier,"sudo ls -l "+dossier,"sudo ls -l /"+dossier],
		lsla_root_rep: ["ls -a -l "+dossier,"ls -a -l /"+dossier,"ls -l -a "+dossier,"ls -l -a /"+dossier],
		lsla_root_rep_sudo: ["sudo ls -a -l "+dossier,"sudo ls -a -l /"+dossier,"sudo ls -l -a "+dossier,"sudo ls -l -a /"+dossier],
		lsla_root_rep_admin: ["ls -a -l "+dossier,"ls -a -l /"+dossier,"ls -l -a "+dossier,"ls -l -a /"+dossier,"sudo ls -a -l "+dossier,"sudo ls -a -l /"+dossier,"sudo ls -l -a "+dossier,"sudo ls -l -a /"+dossier],
		ls_root: ["ls /"],
		ls_root_sudo: ["sudo ls /"],
		ls_root_admin: ["ls /","sudo ls /"],
		lsa_root: ["ls -a /"],
		lsa_root_sudo: ["sudo ls -a /"],
		lsa_root_admin: ["ls -a /","sudo ls -a /"],
		lsl_root: ["ls -l /"],
		lsl_root_sudo: ["sudo ls -l /"],
		lsl_root_admin: ["ls -l /","sudo ls -l /"],
		lsla_root: ["ls -l -a /","ls -a -l /"],
		lsla_root_sudo: ["sudo ls -l -a /","sudo ls -a -l /"],
		lsla_root_admin: ["ls -l -a /","ls -a -l /","sudo ls -l -a /","sudo ls -a -l /"],
		ls_rep: ["ls","ls "+dossier,"ls /"+dossier],
		ls_rep_sudo: ["sudo ls","sudo ls /"+dossier],
		ls_rep_admin: ["ls","ls "+dossier,"ls /"+dossier,"sudo ls","sudo ls /"+dossier],
		lsa_rep: ["ls -a","ls -a /"+dossier],
		lsa_rep_sudo: ["sudo ls -a","sudo ls -a /"+dossier],
		lsa_rep_admin: ["ls -a","ls -a /"+dossier,"sudo ls -a","sudo ls -a /"+dossier],
		lsl_rep: ["ls -l","ls -l /"+dossier],
		lsl_rep_sudo: ["sudo ls -l","sudo ls -l /"+dossier],
		lsl_rep_admin: ["ls -l","ls -l /"+dossier,"sudo ls -l","sudo ls -l /"+dossier],
		lsla_rep: ["ls -l -a","ls -l -a /"+dossier,"ls -a -l","ls -a -l /"+dossier],
		lsla_rep_sudo: ["sudo ls -l -a","sudo ls -l -a /"+dossier,"sudo ls -a -l","sudo ls -a -l /"+dossier],
		lsla_rep_admin: ["ls -l -a","ls -l -a /"+dossier,"ls -a -l","ls -a -l /"+dossier,"sudo ls -l -a","sudo ls -l -a /"+dossier,"sudo ls -a -l","sudo ls -a -l /"+dossier],
	};
}

//=========== lvl0 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}

utilisateurs_lvl0 = ["<user>user@CII</user>:<dossier>/</dossier>$ "];
login_lvl0 = "login";
passe_lvl0 = nomprenom1;//

message_lvl0_passecorrect = "Le mot de passe est <correct>"+passe_lvl0+"</correct>";
message_lvl0_aidepassword = "<special>password</special> : affiche le mot de passe";
liste_lvl0_aide = [message_aidelogin, message_lvl0_aidepassword, message_aidehelp, message_aidemotd, message_aidecommand];

commandes_lvl0_user0_cas0 = [liste_commande_login, ["password"], liste_commande_help, liste_commande_motd];
effets_commandes_lvl0_user0_cas0 = [[message_invitemotdepasse], [message_lvl0_passecorrect], liste_lvl0_aide, [message_intro_lvl0]];
valeurs_attendues_lvl0_user0_cas0 = [passe_lvl0,"","",""];
erreurs_lvl0_user0_cas0 = [message_erreurmotdepasse,"","",""];
changements_utilisateurs_lvl0_user0_cas0 = [10,-1,-1,-1];

commandes_lvl0_user0 = [commandes_lvl0_user0_cas0];
effets_commandes_lvl0_user0 = [effets_commandes_lvl0_user0_cas0];
valeurs_attendues_lvl0_user0 = [valeurs_attendues_lvl0_user0_cas0];
erreurs_lvl0_user0 = [erreurs_lvl0_user0_cas0];
changements_utilisateurs_lvl0_user0 = [changements_utilisateurs_lvl0_user0_cas0];

commandes_lvl0 = [commandes_lvl0_user0];
effets_commandes_lvl0 = [effets_commandes_lvl0_user0];
valeurs_attendues_lvl0 = [valeurs_attendues_lvl0_user0];
erreurs_lvl0 = [erreurs_lvl0_user0];
changements_utilisateurs_lvl0 = [changements_utilisateurs_lvl0_user0];


//=========== lvl1 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl1 = ["<user>user@CII</user>:<dossier>/</dossier>$ "];
login_lvl1 = "login";
passe_lvl1 = "isidor37";//

message_lvl1_up = Nom_compagnie+" 12:58:10, uptime 2:46, 2 utilisateurs, chargement moyen : 0.56, 0.15, 0.09";
message_lvl1_ls0 = "<fichier>help.pdf</fichier> &nbsp;<fichier>manual.doc</fichier> &nbsp;<fichier>motd.bin</fichier> &nbsp;<fichier>password.txt</fichier>";
liste_message_lvl1_ls = [message_lvl1_ls0];
message_lvl1_lsl0 = "total 40";
message_lvl1_lsl1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-02-26 10:13 <fichier>help.pdf</fichier>";
message_lvl1_lsl2 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-02-26 10:13 <fichier>manual.doc</fichier>";
message_lvl1_lsl3 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-02-26 10:13 <fichier>motd.bin</fichier>";
message_lvl1_lsl4 = "-rw-r----- 1 "+nomprenom1+" CII 8192 1967-02-26 10:13 <fichier>password.txt</fichier>";
liste_message_lvl1_lsl = [message_lvl1_lsl0, message_lvl1_lsl1, message_lvl1_lsl2, message_lvl1_lsl3, message_lvl1_lsl4];
message_lvl1_fichier0_para0 = "Bonjour "+Prenom1+",</br>";
message_lvl1_fichier0_para1 = "je t'ai envoyé des fichiers confidentiels pour ton premier jour parmi nous.";
message_lvl1_fichier0_para2 = "Tous sont cryptés et tu auras besoin de mon mot de passe pour les ouvrir.";
message_lvl1_fichier0_para3 = "Je te le donne, mais ne le divulgue à personne, j'utilise le même pour un grand nombre de trucs personnels.";
message_lvl1_fichier0_para4 = "Efface-le après l'avoir utilisé.";
message_lvl1_fichier0_para5 = "Mon mot de passe est : <correct>"+passe_lvl1+"</correct>.";
message_lvl1_fichier0_para6 = "N'oublie pas d'effacer ce message.</br>";
message_lvl1_fichier0_para7 = "A+</br>";
message_lvl1_fichier0_para8 = Prenom5+"</br>";
message_lvl1_fichier0_para9 = "ps : Greg et Julie viennent de se marier !!!";
liste_message_lvl1_fichier0 = [message_lvl1_fichier0_para0, message_lvl1_fichier0_para1, message_lvl1_fichier0_para2, message_lvl1_fichier0_para3, message_lvl1_fichier0_para4, message_lvl1_fichier0_para5, message_lvl1_fichier0_para6, message_lvl1_fichier0_para7, message_lvl1_fichier0_para8, message_lvl1_fichier0_para9];
message_lvl1_fichier1_para0 = "C3 D1 64 B3 39 E6 9F C7 50 72 06 5F A7 1D CF BC C9 AE 3C 28";
message_lvl1_fichier1_para1 = "2F 7D 05 3C 8A B4 CA D7 9E FE 2D 2E 4C 57 9A CD 4C AB 80 A8";
message_lvl1_fichier1_para2 = "C9 E6 38 B6 99 5E 6B 34 4E 9A 84 EC 9D B2 12 0E 2E A6 AA 84";
liste_message_lvl1_fichier1 = [message_lvl1_fichier1_para0, message_lvl1_fichier1_para1, message_lvl1_fichier1_para2];
message_lvl1_fichier2_para0 = "F3 64 5E 9F AD 93 D1 65 5C 09 45 81 5D 32 94 7D 5E 9A 95 15";
message_lvl1_fichier2_para1 = "66 7D 98 78 29 2E 97 60 90 FC 28 B2 26 55 8D C6 73 AF 50 82";
message_lvl1_fichier2_para2 = "9C 64 16 C7 A2 3B 14 1B A5 04 85 2A 5E 0D A3 B7 BA 81 64 F6";
liste_message_lvl1_fichier2 = [message_lvl1_fichier2_para0, message_lvl1_fichier2_para1, message_lvl1_fichier2_para2];
message_lvl1_fichier3_para0 = "32 2F E1 7A 0F FB 63 7F BA 4B 1D B2 F5 24 37 DF D3 06 88 75";
message_lvl1_fichier3_para1 = "D0 14 74 25 14 E5 7B A0 92 A4 4A 14 0D 73 1F 6B F8 C5 0C 56";
message_lvl1_fichier3_para2 = "F9 0C C5 17 B1 93 72 16 10 9C D0 9C A8 1C A2 9C 41 F9 D2 1B";
liste_message_lvl1_fichier3 = [message_lvl1_fichier3_para0, message_lvl1_fichier3_para1, message_lvl1_fichier3_para2];
liste_message_lvl1_aide = [message_aidelogin, message_aideup, message_aidels, message_aidecat, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];

commandes_lvl1_user0_cas0 = [liste_commande_login, liste_commande_up, liste_commande_ls_root_admin.concat(liste_commande_lsa_root_admin), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root_admin), ["cat password.txt","cat /password.txt"], ["cat manual.doc","cat /manual.doc"], ["cat help.pdf","cat /help.pdf"], ["cat motd.bin","cat /motd.bin"], liste_commande_manls, liste_commande_mancat, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl1_user0_cas0 = [[message_invitemotdepasse], [message_lvl1_up], liste_message_lvl1_ls, liste_message_lvl1_lsl, liste_message_lvl1_fichier0, liste_message_lvl1_fichier1, liste_message_lvl1_fichier2, liste_message_lvl1_fichier3, [message_aidemanls], [message_aidemancat], [message_aidemanman], [message_aidemanhelp], liste_message_lvl1_aide, [message_intro_lvl1]];
valeurs_attendues_lvl1_user0_cas0 = [passe_lvl1,"","","","","","","","","","","","",""];
erreurs_lvl1_user0_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","",""];
changements_utilisateurs_lvl1_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl1_user0 = [commandes_lvl1_user0_cas0];
effets_commandes_lvl1_user0 = [effets_commandes_lvl1_user0_cas0];
valeurs_attendues_lvl1_user0 = [valeurs_attendues_lvl1_user0_cas0];
erreurs_lvl1_user0 = [erreurs_lvl1_user0_cas0];
changements_utilisateurs_lvl1_user0 = [changements_utilisateurs_lvl1_user0_cas0];

commandes_lvl1 = [commandes_lvl1_user0];
effets_commandes_lvl1 = [effets_commandes_lvl1_user0];
valeurs_attendues_lvl1 = [valeurs_attendues_lvl1_user0];
erreurs_lvl1 = [erreurs_lvl1_user0];
changements_utilisateurs_lvl1 = [changements_utilisateurs_lvl1_user0];


//=========== lvl2 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl2 = ["<user>user@CII</user>:<dossier>/</dossier>$ "];
login_lvl2 = "login";
passe_lvl2 = "hell6w6rld";//hell6w6rld

message_lvl2_up = Nom_compagnie+" 12:58:10, uptime 2:46, 2 utilisateurs, chargement moyen : 0.23, 0.14, 0.14";
message_lvl2_ls0 = "<fichier>cat.bin</fichier> &nbsp;<fichier>document.txt</fichier> &nbsp;<fichier>ls.pdf</fichier>";
liste_message_lvl2_ls = [message_lvl2_ls0];
message_lvl2_lsl0 = "total 28";
message_lvl2_lsl1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>cat.bin</fichier>";
message_lvl2_lsl2 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>document.txt</fichier>";
message_lvl2_lsl3 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>ls.pdf</fichier>";
liste_message_lvl2_lsl = [message_lvl2_lsl0, message_lvl2_lsl1, message_lvl2_lsl2, message_lvl2_lsl3];
message_lvl2_lsa0 = "<fichier>cat.bin</fichier> &nbsp;<fichier>document.txt</fichier> &nbsp;<fichier>ls.pdf</fichier> &nbsp;<fichier>password.hid</fichier>";
liste_message_lvl2_lsa = [message_lvl2_lsa0];
message_lvl2_lsla0 = "total 28";
message_lvl2_lsla1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>cat.bin</fichier>";
message_lvl2_lsla2 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>document.txt</fichier>";
message_lvl2_lsla3 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-04-05 09:48 <fichier>ls.pdf</fichier>";
message_lvl2_lsla4 = "-rw-r----- 1 "+nomprenom1+" CII 2048 1967-04-05 09:56 <fichier>password.hid</fichier>";
liste_message_lvl2_lsla = [message_lvl2_lsla0, message_lvl2_lsla1, message_lvl2_lsla2, message_lvl2_lsla3, message_lvl2_lsla4];
message_lvl2_fichier0_para0 = "Salut "+Prenom1+",</br>";
message_lvl2_fichier0_para1 = "je t'ai envoyé des fichiers ce matin.";
message_lvl2_fichier0_para2 = "Certains sont cryptés mais tu connais déjà le mot de passe pour les ouvrir.";
message_lvl2_fichier0_para3 = "Je te transferts aussi le message de "+Prenom7+" contenant son mot de passe.";
message_lvl2_fichier0_para4 = "Par contre, il faut que tu le caches !";
message_lvl2_fichier0_para5 = "Il n'apprécierait pas que d'autres membres de "+Nom_compagnie+" y ait accès facilement.</br>";
message_lvl2_fichier0_para6 = "A+</br>";
message_lvl2_fichier0_para7 = Prenom5;
liste_message_lvl2_fichier0 = [message_lvl2_fichier0_para0, message_lvl2_fichier0_para1, message_lvl2_fichier0_para2, message_lvl2_fichier0_para3, message_lvl2_fichier0_para4, message_lvl2_fichier0_para5, message_lvl2_fichier0_para6, message_lvl2_fichier0_para7];
message_lvl2_fichier1_para0 = "C3 D1 64 B3 39 E6 9F C7 50 72 06 5F A7 1D CF BC C9 AE 3C 28";
message_lvl2_fichier1_para1 = "2F 7D 05 3C 8A B4 CA D7 9E FE 2D 2E 4C 57 9A CD 4C AB 80 A8";
message_lvl2_fichier1_para2 = "C9 E6 38 B6 99 5E 6B 34 4E 9A 84 EC 9D B2 12 0E 2E A6 AA 84";
liste_message_lvl2_fichier1 = [message_lvl2_fichier1_para0, message_lvl2_fichier1_para1, message_lvl2_fichier1_para2];
message_lvl2_fichier2_para0 = "F3 64 5E 9F AD 93 D1 65 5C 09 45 81 5D 32 94 7D 5E 9A 95 15";
message_lvl2_fichier2_para1 = "66 7D 98 78 29 2E 97 60 90 FC 28 B2 26 55 8D C6 73 AF 50 82";
message_lvl2_fichier2_para2 = "9C 64 16 C7 A2 3B 14 1B A5 04 85 2A 5E 0D A3 B7 BA 81 64 F6";
liste_message_lvl2_fichier2 = [message_lvl2_fichier2_para0, message_lvl2_fichier2_para1, message_lvl2_fichier2_para2];
message_lvl2_fichier3_para0 = "Message transféré par "+Prenom5+"@CII :";
message_lvl2_fichier3_para1 = "Salut "+Prenom5+",</br>";
message_lvl2_fichier3_para2 = "Comme convenu je te donne mon mot de passe pour que tu puisses accéder à mon poste pendant mon absence.";
message_lvl2_fichier3_para3 = "C'est : <correct>"+passe_lvl2+"</correct></br>";
message_lvl2_fichier3_para4 = Prenom7;
liste_message_lvl2_fichier3 = [message_lvl2_fichier3_para0, message_lvl2_fichier3_para1, message_lvl2_fichier3_para2, message_lvl2_fichier3_para3, message_lvl2_fichier3_para4];
liste_message_lvl2_aide = [message_aidelogin, message_aideup, message_aidels, message_aidecat, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];

commandes_lvl2_user0_cas0 = [liste_commande_login, liste_commande_up, liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, ["cat document.txt","cat /document.txt"], ["cat ls.pdf","cat /ls.pdf"], ["cat cat.bin","cat /cat.bin"], ["cat password.hid","cat /password.hid"], liste_commande_manls, liste_commande_mancat, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl2_user0_cas0 = [[message_invitemotdepasse], [message_lvl2_up], liste_message_lvl2_ls, liste_message_lvl2_lsa, liste_message_lvl2_lsl, liste_message_lvl2_lsla, liste_message_lvl2_fichier0, liste_message_lvl2_fichier1, liste_message_lvl2_fichier2, liste_message_lvl2_fichier3, [message_aidemanls], [message_aidemancat], [message_aidemanman], [message_aidemanhelp], liste_message_lvl2_aide, [message_intro_lvl2]];
valeurs_attendues_lvl2_user0_cas0 = [passe_lvl2,"","","","","","","","","","","","","","",""];
erreurs_lvl2_user0_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl2_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl2_user0 = [commandes_lvl2_user0_cas0];
effets_commandes_lvl2_user0 = [effets_commandes_lvl2_user0_cas0];
valeurs_attendues_lvl2_user0 = [valeurs_attendues_lvl2_user0_cas0];
erreurs_lvl2_user0 = [erreurs_lvl2_user0_cas0];
changements_utilisateurs_lvl2_user0 = [changements_utilisateurs_lvl2_user0_cas0];

commandes_lvl2 = [commandes_lvl2_user0];
effets_commandes_lvl2 = [effets_commandes_lvl2_user0];
valeurs_attendues_lvl2 = [valeurs_attendues_lvl2_user0];
erreurs_lvl2 = [erreurs_lvl2_user0];
changements_utilisateurs_lvl2 = [changements_utilisateurs_lvl2_user0];


//=========== lvl3 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl3 = ["<user>user@CII</user>:<dossier>/</dossier>$ "];
login_lvl3 = "login";
passe_lvl3 = "p2s%w5rd";//p2s%w5rd

message_lvl3_up = Nom_compagnie+" 12:58:10, uptime 2:46, 2 utilisateurs, chargement moyen : 0.73, 0.17, 0.01";
message_lvl3_ls0 = "<fichier>manual.word</fichier> &nbsp;<fichier>password.adm</fichier> &nbsp;<fichier>permissions.txt</fichier> &nbsp;<fichier>test.enc</fichier>";
liste_message_lvl3_ls = [message_lvl3_ls0];
message_lvl3_lsl0_user0_cas0 = "total 17";
message_lvl3_lsl1_user0_cas0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-27 11:24 <fichier>manual.word</fichier>";
message_lvl3_lsl2_user0_cas0 = "---------- 1 "+nomprenom1+" CII 512 &nbsp;1961-05-30 10:10 <fichier>password.adm</fichier>";
message_lvl3_lsl3_user0_cas0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-31 10:41 <fichier>permissions.txt</fichier>";
message_lvl3_lsl4_user0_cas0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-28 09:26 <fichier>test.enc</fichier>";
liste_message_lvl3_lsl_user0_cas0 = [message_lvl3_lsl0_user0_cas0, message_lvl3_lsl1_user0_cas0, message_lvl3_lsl2_user0_cas0, message_lvl3_lsl3_user0_cas0, message_lvl3_lsl4_user0_cas0];
message_lvl3_lsl0_user0_cas1 = "total 17";
message_lvl3_lsl1_user0_cas1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-27 11:24 <fichier>manual.word</fichier>";
message_lvl3_lsl2_user0_cas1 = "-r-------- 1 "+nomprenom1+" CII 512 &nbsp;1967-05-30 10:10 <fichier>password.adm</fichier>";
message_lvl3_lsl3_user0_cas1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-31 10:41 <fichier>permissions.txt</fichier>";
message_lvl3_lsl4_user0_cas1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-05-28 09:26 <fichier>test.enc</fichier>";
liste_message_lvl3_lsl_user0_cas1 = [message_lvl3_lsl0_user0_cas1, message_lvl3_lsl1_user0_cas1, message_lvl3_lsl2_user0_cas1, message_lvl3_lsl3_user0_cas1, message_lvl3_lsl4_user0_cas1];
message_lvl3_fichier0_para0 = "2E 5B CE EA 57 26 FB DA EA 85 BB C8 1C 09 2E 68 24 F3 D6 5A";
message_lvl3_fichier0_para1 = "CA DE 54 3D 6D 0B DF A4 31 51 D3 AB EF D4 C9 80 35 B4 F6 5D";
message_lvl3_fichier0_para2 = "DB EA 48 C5 01 D7 E9 83 7A 62 4A 5A FD 03 F2 08 D7 C7 C2 55";
liste_message_lvl3_fichier0 = [message_lvl3_fichier0_para0, message_lvl3_fichier0_para1, message_lvl3_fichier0_para2];
message_lvl3_fichier1_para0 = "Salut "+Prenom1+",</br>";
message_lvl3_fichier1_para1 = "Tu m'as demandé l'autre jour de t'expliquer le fonctionnement des permissions sur les fichiers.";
message_lvl3_fichier1_para2 = "Alors voilà ce que je peux t'en dire :</br>";
message_lvl3_fichier1_para3 = "lorsque tu utilises la commande <special>ls -l</special> tu peux voir apparaitre devant chaque élément du"
message_lvl3_fichier1_para4 = "dossier dix caractères parmi -, d, r, w et x .</br>";
message_lvl3_fichier1_para5 = "- le premier caractère indique si l'élément est un fichier (-) ou un dossier (d).";
message_lvl3_fichier1_para6 = "- les trois caractères suivants indiquent si le fichier peut être lu (r), écris (w) et executé (x)";
message_lvl3_fichier1_para7 = "par le propriétaire du fichier.";
message_lvl3_fichier1_para8 = "- les trois caractères suivants indiquent si le fichier peut être lu (r), écris (w) et executé (x)";
message_lvl3_fichier1_para9 = "par les utilisateurs du groupe propriétaire.";
message_lvl3_fichier1_para10 = "- et les trois derniers caractères indiquent si le fichier peut être lu (r), écris (w) et executé (x)";
message_lvl3_fichier1_para11 = "par les autres utilisateurs.</br>";
message_lvl3_fichier1_para12 = "Hier je t'ai envoyé un fichier appelé password.adm. Utilise la commande <special>ls -l</special> pour en voir les détails.</br>";
message_lvl3_fichier1_para13 = "Les 10 premiers caractères étant des -, personne ne peut lire, écrire ou executer ce fichier.";
message_lvl3_fichier1_para14 = "Tu peux voir également que tu es le propriétaire de ce fichier, et que le groupe propriétaire est notre compagnie.";
message_lvl3_fichier1_para15 = "Si tu veux pouvoir lire ce fichier, il va falloir que tu utilises la commande <special>chmod</special> en mode administrateur,";
message_lvl3_fichier1_para16 = "avec l'option <special>u+r</special> .</br>";
message_lvl3_fichier1_para17 = "Tu trouveras toutes les informations liées à cette commande en saisissant <special>man chmod</special>.</br>";
message_lvl3_fichier1_para18 = Prenom7;
liste_message_lvl3_fichier1 = [message_lvl3_fichier1_para0, message_lvl3_fichier1_para1, message_lvl3_fichier1_para2, message_lvl3_fichier1_para3, message_lvl3_fichier1_para4, message_lvl3_fichier1_para5, message_lvl3_fichier1_para6, message_lvl3_fichier1_para7, message_lvl3_fichier1_para8, message_lvl3_fichier1_para9, message_lvl3_fichier1_para10, message_lvl3_fichier1_para11, message_lvl3_fichier1_para12, message_lvl3_fichier1_para13, message_lvl3_fichier1_para14, message_lvl3_fichier1_para15, message_lvl3_fichier1_para16, message_lvl3_fichier1_para17, message_lvl3_fichier1_para18];
message_lvl3_fichier2_para0 = "A0 2B C2 BE 35 AB 8F 34 4C AB 29 1A EC 18 10 EC 65 55 CB FC";
message_lvl3_fichier2_para1 = "36 04 99 A5 E9 94 7E D1 FC 31 C2 DA 55 14 3B 32 AC 85 59 1A";
message_lvl3_fichier2_para2 = "97 94 97 14 84 A8 DB FA 72 BA 7A 21 F7 61 C1 EA 07 8F 9F 05";
liste_message_lvl3_fichier2 = [message_lvl3_fichier2_para0, message_lvl3_fichier2_para1, message_lvl3_fichier2_para2];
message_lvl3_fichier3_para0 = "Le mot de passe est <correct>"+passe_lvl3+"</correct>";
liste_message_lvl3_fichier3 = [message_lvl3_fichier3_para0];
liste_message_lvl3_aide = [message_aidelogin, message_aideup, message_aidels, message_aidecat, message_aidesudo, message_aidechmod, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];

commandes_lvl3_user0_cas0 = [liste_commande_login, liste_commande_up, liste_commande_ls_root_admin.concat(liste_commande_lsa_root_admin), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root_admin), ["cat password.adm","cat /password.adm","sudo cat password.adm","sudo cat /password.adm"], ["cat manual.word","cat /manual.word","sudo cat manual.word","sudo cat /manual.word"], ["cat permissions.txt","cat /permissions.txt","sudo cat permissions.txt","sudo cat /permissions.txt"], ["cat test.enc","cat /test.enc","sudo cat test.enc","sudo cat /test.enc"], ["chmod u+r password.adm"], ["sudo chmod u+r password.adm"], liste_commande_manls, liste_commande_mancat, liste_commande_mansudo, liste_commande_manchmod, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl3_user0_cas0 = [[message_invitemotdepasse], [message_lvl3_up], liste_message_lvl3_ls, liste_message_lvl3_lsl_user0_cas0, [message_erreuradmincat], liste_message_lvl3_fichier0, liste_message_lvl3_fichier1, liste_message_lvl3_fichier2, [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemansudo], [message_aidemanchmod], [message_aidemanman], [message_aidemanhelp], liste_message_lvl3_aide, [message_intro_lvl3]];
valeurs_attendues_lvl3_user0_cas0 = [passe_lvl3,"","","","","","","","","","","","","","","","",""];
erreurs_lvl3_user0_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl3_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl3_user0_cas1 = [liste_commande_login, liste_commande_up, liste_commande_ls_root_admin.concat(liste_commande_lsa_root_admin), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root_admin), ["cat password.adm","cat /password.adm","sudo cat password.adm","sudo cat /password.adm"], ["cat manual.word","cat /manual.word","sudo cat manual.word","sudo cat /manual.word"], ["cat permissions.txt","cat /permissions.txt","sudo cat permissions.txt","sudo cat /permissions.txt"], ["cat test.enc","cat /test.enc","sudo cat test.enc","sudo cat /test.enc"], ["chmod u+r password.adm"], ["sudo chmod u-r password.adm"], liste_commande_manls, liste_commande_mancat, liste_commande_mansudo, liste_commande_manchmod, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl3_user0_cas1 = [[message_invitemotdepasse], [message_lvl3_up], liste_message_lvl3_ls, liste_message_lvl3_lsl_user0_cas1, liste_message_lvl3_fichier3, liste_message_lvl3_fichier0, liste_message_lvl3_fichier1, liste_message_lvl3_fichier2, [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemansudo], [message_aidemanchmod], [message_aidemanman], [message_aidemanhelp], liste_message_lvl3_aide, [message_intro_lvl3]];
valeurs_attendues_lvl3_user0_cas1 = [passe_lvl3,"","","","","","","","","","","","","","","","",""];
erreurs_lvl3_user0_cas1 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl3_user0_cas1 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl3_user0 = [commandes_lvl3_user0_cas0, commandes_lvl3_user0_cas1];
effets_commandes_lvl3_user0 = [effets_commandes_lvl3_user0_cas0, effets_commandes_lvl3_user0_cas1];
valeurs_attendues_lvl3_user0 = [valeurs_attendues_lvl3_user0_cas0, valeurs_attendues_lvl3_user0_cas1];
erreurs_lvl3_user0 = [erreurs_lvl3_user0_cas0, erreurs_lvl3_user0_cas1];
changements_utilisateurs_lvl3_user0 = [changements_utilisateurs_lvl3_user0_cas0, changements_utilisateurs_lvl3_user0_cas1];

commandes_lvl3 = [commandes_lvl3_user0];
effets_commandes_lvl3 = [effets_commandes_lvl3_user0];
valeurs_attendues_lvl3 = [valeurs_attendues_lvl3_user0];
erreurs_lvl3 = [erreurs_lvl3_user0];
changements_utilisateurs_lvl3 = [changements_utilisateurs_lvl3_user0];


//=========== lvl4 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl4 = ["<user>user@CII</user>:<dossier>/</dossier>$ ","<user>user@CII</user>:<dossier>/password</dossier>$ "];
login_lvl4 = "login";
passe_lvl4 = "alamb7c";//

message_lvl4_up = Nom_compagnie+" 12:58:10, uptime 2:46, 2 utilisateurs, chargement moyen : 0.43, 0.28, 0.07";
message_lvl4_ls0_user0 = "<fichier>command.enc</fichier> &nbsp;<fichier>help.pdf</fichier> &nbsp;<dossier>password</dossier>";
liste_message_lvl4_ls_user0 = [message_lvl4_ls0_user0];
message_lvl4_lsl0_user0 = "total 9";
message_lvl4_lsl1_user0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-07-11 09:13 <fichier>command.enc</fichier>";
message_lvl4_lsl2_user0 = "-rw-r--r-- 1 "+nomprenom1+" CII 512 &nbsp;1967-07-11 09:13 <fichier>help.pdf</fichier>";
message_lvl4_lsl3_user0 = "drwxr-xr-x 2 "+nomprenom1+" CII 5120 1967-06-19 10:24 <dossier>password</dossier>";
liste_message_lvl4_lsl_user0 = [message_lvl4_lsl0_user0, message_lvl4_lsl1_user0, message_lvl4_lsl2_user0, message_lvl4_lsl3_user0];
message_lvl4_fichier0_para0 = "7D 6A CE EA 59 26 8B DA BA 85 BB C8 1C 09 2E 68 24 F7 D6 58";
message_lvl4_fichier0_para1 = "8E 9E F6 CD AD 1B D8 39 31 51 D3 AB EC D4 C9 80 3C BA F6 5D";
message_lvl4_fichier0_para2 = "AB F8 40 85 01 D7 C9 83 7A 62 4A 5A FD 93 F2 A8 D7 C7 C2 95";
liste_message_lvl4_fichier0 = [message_lvl4_fichier0_para0, message_lvl4_fichier0_para1, message_lvl4_fichier0_para2];
message_lvl4_fichier1_para0 = "Salut "+Prenom1+",</br>";
message_lvl4_fichier1_para1 = "Je sais que tu n'es pas encore bien habituée à travailler avec les invites de commande Linux.";
message_lvl4_fichier1_para2 = "Quand tu utilises la commande <special>ls</special>, tu verras apparaître les fichiers en <fichier>gris</fichier> et les dossiers";
message_lvl4_fichier1_para3 = "en <dossier>bleu</dossier>";
message_lvl4_fichier1_para4 = "Tu sais déjà ouvir les fichiers avec la commande <special>cat</special>. Pour entrer dans un dossier, il te faudra";
message_lvl4_fichier1_para5 = "utiliser la commande <special>cd</special>.";
message_lvl4_fichier1_para6 = "Si tu veux plus de détails sur cette commande, saisi <special>man cd</special> dans le terminal.</br>";
message_lvl4_fichier1_para7 = Prenom5;
liste_message_lvl4_fichier1 = [message_lvl4_fichier1_para0, message_lvl4_fichier1_para1, message_lvl4_fichier1_para2, message_lvl4_fichier1_para3, message_lvl4_fichier1_para4, message_lvl4_fichier1_para5, message_lvl4_fichier1_para6, message_lvl4_fichier1_para7];
message_lvl4_ls0_user1 = "<fichier>ls.word</fichier> &nbsp;<fichier>password.vi</fichier>";
liste_message_lvl4_ls_user1 = [message_lvl4_ls0_user1];
message_lvl4_lsl0_user1 = "total 10";
message_lvl4_lsl1_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 1024 1967-06-19 10:25 <fichier>password.vi</fichier>";
message_lvl4_lsl2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-06-19 10:26 <fichier>ls.word</fichier>";
liste_message_lvl4_lsl_user1 = [message_lvl4_lsl0_user1, message_lvl4_lsl1_user1, message_lvl4_lsl2_user1];
message_lvl4_lsa0_user1 = "<dossier>..</dossier> &nbsp;<fichier>password.vi</fichier> &nbsp;<fichier>ls.word</fichier>";
liste_message_lvl4_lsa_user1 = [message_lvl4_lsa0_user1];
message_lvl4_lsla0_user1 = "total 10";
message_lvl4_lsla1_user1 = "drwxr-xr-x 1 "+nomprenom1+" CII 9728 1967-06-19 10:24 <dossier>..</dossier>";
message_lvl4_lsla2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 1024 1967-06-19 10:25 <fichier>password.vi</fichier>";
message_lvl4_lsla3_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-06-19 10:26 <fichier>ls.word</fichier>";
liste_message_lvl4_lsla_user1 = [message_lvl4_lsla0_user1, message_lvl4_lsla1_user1, message_lvl4_lsla2_user1, message_lvl4_lsla3_user1];
message_lvl4_fichier2_para0 = "Le mot de passe est <correct>"+passe_lvl4+"</correct>";
liste_message_lvl4_fichier2 = [message_lvl4_fichier2_para0];
message_lvl4_fichier3_para0 = "32 2F E1 7A 0F FB 63 7F BA 4B 1D B2 F5 24 37 DF D3 06 88 75";
message_lvl4_fichier3_para1 = "D0 14 74 25 14 E5 7B A0 92 A4 4A 14 0D 73 1F 6B F8 C5 0C 56";
message_lvl4_fichier3_para2 = "F9 0C C5 17 B1 93 72 16 10 9C D0 9C A8 1C A2 9C 41 F9 D2 1B";
liste_message_lvl4_fichier3 = [message_lvl4_fichier3_para0, message_lvl4_fichier3_para1, message_lvl4_fichier3_para2];
liste_message_lvl4_aide_user0 = [message_aidelogin, message_aideup, message_aidels, message_aidecat, message_aidecd, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
liste_message_lvl4_aide_user1 = [message_aideup, message_aidels, message_aidecat, message_aidecd, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
listes_commandes_ls = construire_listes_ls("password");
liste_commande_lvl4_ls_rep_user0 = listes_commandes_ls.ls_root_rep;
liste_commande_lvl4_lsa_rep_user0 = listes_commandes_ls.lsa_root_rep;
liste_commande_lvl4_lsl_rep_user0 = listes_commandes_ls.lsl_root_rep;
liste_commande_lvl4_lsla_rep_user0 = listes_commandes_ls.lsla_root_rep;
liste_commande_lvl4_ls_root_user1 = listes_commandes_ls.ls_root;
liste_commande_lvl4_lsa_root_user1 = listes_commandes_ls.lsa_root;
liste_commande_lvl4_lsl_root_user1 = listes_commandes_ls.lsl_root;
liste_commande_lvl4_lsla_root_user1 = listes_commandes_ls.lsla_root;
liste_commande_lvl4_ls_rep_user1 = listes_commandes_ls.ls_rep;
liste_commande_lvl4_lsa_rep_user1 = listes_commandes_ls.lsa_rep;
liste_commande_lvl4_lsl_rep_user1 = listes_commandes_ls.lsl_rep;
liste_commande_lvl4_lsla_rep_user1 = listes_commandes_ls.lsla_rep;
 
commandes_lvl4_user0_cas0 = [liste_commande_login, liste_commande_up, liste_commande_ls_root.concat(liste_commande_lsa_root), liste_commande_lsl_root.concat(liste_commande_lsla_root), liste_commande_lvl4_ls_rep_user0, liste_commande_lvl4_lsa_rep_user0, liste_commande_lvl4_lsl_rep_user0, liste_commande_lvl4_lsla_rep_user0, ["cat command.enc","cat /command.enc"], ["cat help.pdf","cat /help.pdf"], ["cd password","cd /password"], ["cat /password/password.vi"], ["cat /password/ls.word"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl4_user0_cas0 = [[message_invitemotdepasse], [message_lvl4_up], liste_message_lvl4_ls_user0, liste_message_lvl4_lsl_user0, liste_message_lvl4_ls_user1, liste_message_lvl4_lsa_user1, liste_message_lvl4_lsl_user1, liste_message_lvl4_lsla_user1, liste_message_lvl4_fichier0, liste_message_lvl4_fichier1, [], liste_message_lvl4_fichier2, liste_message_lvl4_fichier3, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanman], [message_aidemanhelp], liste_message_lvl4_aide_user0, [message_intro_lvl4]];
valeurs_attendues_lvl4_user0_cas0 = [passe_lvl4,"","","","","","","","","","","","","","","","","","",""];
erreurs_lvl4_user0_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl4_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl4_user0 = [commandes_lvl4_user0_cas0];
effets_commandes_lvl4_user0 = [effets_commandes_lvl4_user0_cas0];
valeurs_attendues_lvl4_user0 = [valeurs_attendues_lvl4_user0_cas0];
erreurs_lvl4_user0 = [erreurs_lvl4_user0_cas0];
changements_utilisateurs_lvl4_user0 = [changements_utilisateurs_lvl4_user0_cas0];

commandes_lvl4_user1_cas0 = [liste_commande_up, liste_commande_lvl4_ls_rep_user1, liste_commande_lvl4_lsa_rep_user1, liste_commande_lvl4_lsl_rep_user1, liste_commande_lvl4_lsla_rep_user1, (liste_commande_lvl4_ls_root_user1).concat(liste_commande_lvl4_lsa_root_user1), (liste_commande_lvl4_lsl_root_user1).concat(liste_commande_lvl4_lsla_root_user1), ["cat /command.enc"], ["cat /help.pdf"], ["cat password.vi","cat /password/password.vi"], ["cat ls.word","cat /password/ls.word"], liste_commande_cdpp_admin, liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl4_user1_cas0 = [[message_lvl4_up], liste_message_lvl4_ls_user1, liste_message_lvl4_lsa_user1, liste_message_lvl4_lsl_user1, liste_message_lvl4_lsla_user1, liste_message_lvl4_ls_user0, liste_message_lvl4_lsl_user0, liste_message_lvl4_fichier0, liste_message_lvl4_fichier1, liste_message_lvl4_fichier2, liste_message_lvl4_fichier3, [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanman], [message_aidemanhelp], liste_message_lvl4_aide_user1, [message_intro_lvl4]];
valeurs_attendues_lvl4_user1_cas0 = ["","","","","","","","","","","","","","","","","","",""];
erreurs_lvl4_user1_cas0 = ["","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl4_user1_cas0 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl4_user1 = [commandes_lvl4_user1_cas0];
effets_commandes_lvl4_user1 = [effets_commandes_lvl4_user1_cas0];
valeurs_attendues_lvl4_user1 = [valeurs_attendues_lvl4_user1_cas0];
erreurs_lvl4_user1 = [erreurs_lvl4_user1_cas0];
changements_utilisateurs_lvl4_user1 = [changements_utilisateurs_lvl4_user1_cas0];

commandes_lvl4 = [commandes_lvl4_user0, commandes_lvl4_user1];
effets_commandes_lvl4 = [effets_commandes_lvl4_user0, effets_commandes_lvl4_user1];
valeurs_attendues_lvl4 = [valeurs_attendues_lvl4_user0, valeurs_attendues_lvl4_user1];
erreurs_lvl4 = [erreurs_lvl4_user0, erreurs_lvl4_user1];
changements_utilisateurs_lvl4 = [changements_utilisateurs_lvl4_user0, changements_utilisateurs_lvl4_user1];


//=========== lvl5 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl5 = ["<user>user@CII</user>:<dossier>/</dossier>$ ","<user>user@CII</user>:<dossier>/decrypte</dossier>$ "];
login_lvl5 = "login";
passe_lvl5 = "abcs6le4l#";//

message_lvl5_mkdir = "Le dossier decrypte a été créé";
message_lvl5_up = Nom_compagnie+" 12:58:10, uptime 2:46, 2 utilisateurs, chargement moyen : 0.61, 0.37, 0.05";
message_lvl5_ls0_user0_cas0 = "<fichier>help.txt</fichier> &nbsp;<fichier>password.enc</fichier>";
message_lvl5_ls0_user0_cas1 = "<dossier>decrypte</dossier> &nbsp;<fichier>help.txt</fichier> &nbsp;<fichier>password.enc</fichier>";
message_lvl5_ls0_user0_cas2 = "<dossier>decrypte</dossier> &nbsp;<fichier>help.txt</fichier>";
liste_message_lvl5_ls_user0_cas0 = [message_lvl5_ls0_user0_cas0];
liste_message_lvl5_ls_user0_cas1 = [message_lvl5_ls0_user0_cas1];
liste_message_lvl5_ls_user0_cas2 = [message_lvl5_ls0_user0_cas2];
message_lvl5_lsl0_user0_cas0 = "total 9";
message_lvl5_lsl0_user0_cas2 = "total 8";
message_lvl5_lsl1_user0_cas1 = "drwxr-xr-x 0 "+nomprenom1+" CII 0 &nbsp;&nbsp;&nbsp;"+date_jeu+"<dossier>decrypte</dossier>";
message_lvl5_lsl1_user0_cas2 = "drwxr-xr-x 1 "+nomprenom1+" CII 512 &nbsp;"+date_jeu+"<dossier>decrypte</dossier>";
message_lvl5_lsl2_user0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1967-07-11 09:13 <fichier>help.txt</fichier>";
message_lvl5_lsl3_user0 = "-rw-r--r-- 1 "+nomprenom1+" CII 512 &nbsp;1967-07-11 09:13 <fichier>password.enc</fichier>";
liste_message_lvl5_lsl_user0_cas0 = [message_lvl5_lsl0_user0_cas0, message_lvl5_lsl2_user0, message_lvl5_lsl3_user0];
liste_message_lvl5_lsl_user0_cas1 = [message_lvl5_lsl0_user0_cas0, message_lvl5_lsl1_user0_cas1, message_lvl5_lsl2_user0, message_lvl5_lsl3_user0];
liste_message_lvl5_lsl_user0_cas2 = [message_lvl5_lsl0_user0_cas2, message_lvl5_lsl1_user0_cas2, message_lvl5_lsl3_user0];
message_lvl5_fichier0_para0 = "Salut "+Prenom1+",</br>";
message_lvl5_fichier0_para1 = "J'expérimente en ce moment une nouvelle méthode de protection des mots de passe.";
message_lvl5_fichier0_para2 = "J'ai crypté un mot de passe dans le fichier password.enc .";
message_lvl5_fichier0_para3 = "Le seul moyen pour lire son contenu est de créer un dossier intitulé <dossier>decrypte</dossier>";
message_lvl5_fichier0_para4 = "puis d'y déplacer le fichier password.enc et de l'ouvrir depuis ce dossier.";
message_lvl5_fichier0_para5 = "Qu'est ce que tu en penses ?</br>";
message_lvl5_fichier0_para6 = "J'ai soumis mon idée au secteur central, j'attends toujours leur avis.</br>";
message_lvl5_fichier0_para7 = "Tom";
liste_message_lvl5_fichier0 = [message_lvl5_fichier0_para0, message_lvl5_fichier0_para1, message_lvl5_fichier0_para2, message_lvl5_fichier0_para3, message_lvl5_fichier0_para4, message_lvl5_fichier0_para5, message_lvl5_fichier0_para6, message_lvl5_fichier0_para7];
message_lvl5_fichier1_para0 = "D6 7F 8E C3 35 AB 8F 34 4C AB 29 1A EC 18 10 EC 65 55 CB FC";
message_lvl5_fichier1_para1 = "7B 09 A8 A5 E9 94 7E C1 FC 51 C2 DA 55 14 DB 32 3C 85 59 1A";
message_lvl5_fichier1_para2 = "A1 B2 97 14 A4 A8 DB FA 72 BA 7B 21 F7 61 C1 EA 07 8F 9F 05";
liste_message_lvl5_fichier1 = [message_lvl5_fichier1_para0, message_lvl5_fichier1_para1, message_lvl5_fichier1_para2];
message_lvl5_ls0_user1_cas1 = "";
message_lvl5_ls0_user1_cas2 = "<fichier>password.enc</fichier>";
liste_message_lvl5_ls_user1_cas0 = [];
liste_message_lvl5_ls_user1_cas1 = [message_lvl5_ls0_user1_cas1];
liste_message_lvl5_ls_user1_cas2 = [message_lvl5_ls0_user1_cas2];
message_lvl5_lsa0_user1_cas1 = "<dossier>..</dossier>";
message_lvl5_lsa0_user1_cas2 = "<dossier>..</dossier> &nbsp;<fichier>password.enc</fichier>";
liste_message_lvl5_lsa_user1_cas0 = [];
liste_message_lvl5_lsa_user1_cas1 = [message_lvl5_lsa0_user1_cas1];
liste_message_lvl5_lsa_user1_cas2 = [message_lvl5_lsa0_user1_cas2];
message_lvl5_lsl0_user1_cas1 = "total 0";
message_lvl5_lsl0_user1_cas2 = "total 1";
message_lvl5_lsl2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 512 &nbsp;"+date_jeu+"<fichier>password.enc</fichier>";
liste_message_lvl5_lsl_user1_cas0 = [];
liste_message_lvl5_lsl_user1_cas1 = [message_lvl5_lsl0_user1_cas1];
liste_message_lvl5_lsl_user1_cas2 = [message_lvl5_lsl0_user1_cas2, message_lvl5_lsl2_user1];
message_lvl5_lsla0_user1_cas1 = "total 0";
message_lvl5_lsla0_user1_cas2 = "total 1";
message_lvl5_lsla1_user1_cas1 = "drwxr-xr-x 2 "+nomprenom1+" CII 4608 1967-02-25 17:15 <dossier>..</dossier>";
message_lvl5_lsla1_user1_cas2 = "drwxr-xr-x 1 "+nomprenom1+" CII 4608 1967-02-25 17:15 <dossier>..</dossier>";
message_lvl5_lsla2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 512 &nbsp;"+date_jeu+"<fichier>password.enc</fichier>";
liste_message_lvl5_lsla_user1_cas0 = [];
liste_message_lvl5_lsla_user1_cas1 = [message_lvl5_lsla0_user1_cas1, message_lvl5_lsla1_user1_cas1];
liste_message_lvl5_lsla_user1_cas2 = [message_lvl5_lsla0_user1_cas2, message_lvl5_lsla1_user1_cas2, message_lvl5_lsla2_user1];
message_lvl5_fichier2_para0 = "Le mot de passe est <correct>"+passe_lvl5+"</correct>";
liste_message_lvl5_fichier2 = [message_lvl5_fichier2_para0];
liste_message_lvl5_aide_user0 = [message_aidelogin, message_aideup, message_aidels, message_aidecat, message_aidecd, message_aidemkdir, message_aidemv, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
liste_message_lvl5_aide_user1 = [message_aideup, message_aidels, message_aidecat, message_aidecd, message_aidemkdir, message_aidemv, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
listes_commandes_ls = construire_listes_ls("decrypte");
liste_commande_lvl5_ls_rep_user0 = listes_commandes_ls.ls_root_rep;
liste_commande_lvl5_lsa_rep_user0 = listes_commandes_ls.lsa_root_rep;
liste_commande_lvl5_lsl_rep_user0 = listes_commandes_ls.lsl_root_rep;
liste_commande_lvl5_lsla_rep_user0 = listes_commandes_ls.lsla_root_rep;
liste_commande_lvl5_ls_root_user1 = listes_commandes_ls.ls_root;
liste_commande_lvl5_lsa_root_user1 = listes_commandes_ls.lsa_root;
liste_commande_lvl5_lsl_root_user1 = listes_commandes_ls.lsl_root;
liste_commande_lvl5_lsla_root_user1 = listes_commandes_ls.lsla_root;
liste_commande_lvl5_ls_rep_user1 = listes_commandes_ls.ls_rep;
liste_commande_lvl5_lsa_rep_user1 = listes_commandes_ls.lsa_rep;
liste_commande_lvl5_lsl_rep_user1 = listes_commandes_ls.lsl_rep;
liste_commande_lvl5_lsla_rep_user1 = listes_commandes_ls.lsla_rep;

commandes_lvl5_user0_cas0 = [liste_commande_login, liste_commande_up, liste_commande_ls_root.concat(liste_commande_lsa_root), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root), ["cat help.txt","cat /help.txt"], ["cat password.enc","cat /password.enc"], ["mkdir decrypte","mkdir /decrypte"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user0_cas0 = [[message_invitemotdepasse], [message_lvl5_up], liste_message_lvl5_ls_user0_cas0, liste_message_lvl5_lsl_user0_cas0, liste_message_lvl5_fichier0, liste_message_lvl5_fichier1, [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user0_cas0 = [passe_lvl5,"","","","","","","","","","","","","","",""];
erreurs_lvl5_user0_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user0_cas1 = [liste_commande_login, liste_commande_up, liste_commande_ls_root.concat(liste_commande_lsa_root), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root), liste_commande_lvl5_ls_rep_user0, liste_commande_lvl5_lsa_rep_user0, liste_commande_lvl5_lsl_rep_user0, liste_commande_lvl5_lsla_rep_user0, ["cat help.txt","cat /help.txt"], ["cat password.enc","cat /password.enc"], ["mv password.enc decrypte","mv password.enc /decrypte","mv password.enc decrypte/password.enc","mv password.enc /decrypte/password.enc","mv /password.enc decrypte","mv /password.enc /decrypte","mv /password.enc decrypte/password.enc","mv /password.enc /decrypte/password.enc"], ["cd decrypte","cd /decrypte"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user0_cas1 = [[message_invitemotdepasse], [message_lvl5_up], liste_message_lvl5_ls_user0_cas1, liste_message_lvl5_lsl_user0_cas1, liste_message_lvl5_ls_user1_cas1, liste_message_lvl5_lsa_user1_cas1, liste_message_lvl5_lsl_user1_cas1, liste_message_lvl5_lsla_user1_cas1, liste_message_lvl5_fichier0, liste_message_lvl5_fichier1, [], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user0_cas1 = [passe_lvl5,"","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl5_user0_cas1 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user0_cas1 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user0_cas2 = [liste_commande_login, liste_commande_up, liste_commande_ls_root.concat(liste_commande_lsa_root), liste_commande_lsl_root_admin.concat(liste_commande_lsla_root), liste_commande_lvl5_ls_rep_user0, liste_commande_lvl5_lsa_rep_user0, liste_commande_lvl5_lsl_rep_user0, liste_commande_lvl5_lsla_rep_user0, ["cat help.txt","cat /help.txt"], ["cat /decrypte/password.enc"], ["mv /decrypte/password.enc /","mv /decrypte/password.enc /password.enc"], ["cd decrypte","cd /decrypte"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user0_cas2 = [[message_invitemotdepasse], [message_lvl5_up], liste_message_lvl5_ls_user0_cas2, liste_message_lvl5_lsl_user0_cas2, liste_message_lvl5_ls_user1_cas2, liste_message_lvl5_lsa_user1_cas2, liste_message_lvl5_lsl_user1_cas2, liste_message_lvl5_lsla_user1_cas2, liste_message_lvl5_fichier0, liste_message_lvl5_fichier2, [], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user0_cas2 = [passe_lvl5,"","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl5_user0_cas2 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user0_cas2 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user0 = [commandes_lvl5_user0_cas0, commandes_lvl5_user0_cas1, commandes_lvl5_user0_cas2];
effets_commandes_lvl5_user0 = [effets_commandes_lvl5_user0_cas0, effets_commandes_lvl5_user0_cas1, effets_commandes_lvl5_user0_cas2];
valeurs_attendues_lvl5_user0 = [valeurs_attendues_lvl5_user0_cas0, valeurs_attendues_lvl5_user0_cas1, valeurs_attendues_lvl5_user0_cas2];
erreurs_lvl5_user0 = [erreurs_lvl5_user0_cas0, erreurs_lvl5_user0_cas1, erreurs_lvl5_user0_cas2];
changements_utilisateurs_lvl5_user0 = [changements_utilisateurs_lvl5_user0_cas0, changements_utilisateurs_lvl5_user0_cas1, changements_utilisateurs_lvl5_user0_cas2];

commandes_lvl5_user1_cas0 = [liste_commande_up, liste_commande_lvl5_ls_rep_user1, liste_commande_lvl5_lsa_rep_user1, liste_commande_lvl5_lsl_rep_user1, liste_commande_lvl5_lsla_rep_user1, liste_commande_cdpp, liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user1_cas0 = [[message_lvl5_up], liste_message_lvl5_ls_user1_cas0, liste_message_lvl5_lsa_user1_cas0, liste_message_lvl5_lsl_user1_cas0, liste_message_lvl5_lsla_user1_cas0, [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user1_cas0 = ["","","","","","","","","","","","","","","","",""];
erreurs_lvl5_user1_cas0 = ["","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user1_cas0 = [-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user1_cas1 = [liste_commande_up, liste_commande_lvl5_ls_rep_user1, liste_commande_lvl5_lsa_rep_user1, liste_commande_lvl5_lsl_rep_user1, liste_commande_lvl5_lsla_rep_user1, (liste_commande_lvl5_ls_root_user1).concat(liste_commande_lvl5_lsa_root_user1), (liste_commande_lvl5_lsl_root_user1).concat(liste_commande_lvl5_lsla_root_user1), ["cat /password.enc"], ["mv /password.enc /decrypte","mv /password.enc /decrypte/password.enc"], liste_commande_cdpp, liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user1_cas1 = [[message_lvl5_up], liste_message_lvl5_ls_user1_cas1, liste_message_lvl5_lsa_user1_cas1, liste_message_lvl5_lsl_user1_cas1, liste_message_lvl5_lsla_user1_cas1, liste_message_lvl5_ls_user0_cas1, liste_message_lvl5_lsl_user0_cas1, liste_message_lvl5_fichier1, [], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user1_cas1 = ["","","","","","","","","","","","","","","","","","",""];
erreurs_lvl5_user1_cas1 = ["","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user1_cas1 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user1_cas2 = [liste_commande_up, liste_commande_lvl5_ls_rep_user1, liste_commande_lvl5_lsa_rep_user1, liste_commande_lvl5_lsl_rep_user1, liste_commande_lvl5_lsla_rep_user1, (liste_commande_lvl5_ls_root_user1).concat(liste_commande_lvl5_lsa_root_user1), (liste_commande_lvl5_lsl_root_user1).concat(liste_commande_lvl5_lsla_root_user1), ["cat password.enc","cat /decrypte/password.enc"], ["mv password.enc /","mv password.enc /password.enc","mv /decrypte/password.enc /","mv /decrypte/password.enc /password.enc"], liste_commande_cdpp, liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manmkdir, liste_commande_manmv, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl5_user1_cas2 = [[message_lvl5_up], liste_message_lvl5_ls_user1_cas2, liste_message_lvl5_lsa_user1_cas2, liste_message_lvl5_lsl_user1_cas2, liste_message_lvl5_lsla_user1_cas2, liste_message_lvl5_ls_user0_cas2, liste_message_lvl5_lsl_user0_cas2, liste_message_lvl5_fichier2, [], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanmkdir], [message_aidemanmv], [message_aidemanman], [message_aidemanhelp], liste_message_lvl5_aide_user0, [message_intro_lvl5]];
valeurs_attendues_lvl5_user1_cas2 = ["","","","","","","","","","","","","","","","","",""];
erreurs_lvl5_user1_cas2 = ["","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl5_user1_cas2 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl5_user1 = [commandes_lvl5_user1_cas0, commandes_lvl5_user1_cas1, commandes_lvl5_user1_cas2];
effets_commandes_lvl5_user1 = [effets_commandes_lvl5_user1_cas0, effets_commandes_lvl5_user1_cas1, effets_commandes_lvl5_user1_cas2];
valeurs_attendues_lvl5_user1 = [valeurs_attendues_lvl5_user1_cas0, valeurs_attendues_lvl5_user1_cas1, valeurs_attendues_lvl5_user1_cas2];
erreurs_lvl5_user1 = [erreurs_lvl5_user1_cas0, erreurs_lvl5_user1_cas1, erreurs_lvl5_user1_cas2];
changements_utilisateurs_lvl5_user1 = [changements_utilisateurs_lvl5_user1_cas0, changements_utilisateurs_lvl5_user1_cas1, changements_utilisateurs_lvl5_user1_cas2];

commandes_lvl5 = [commandes_lvl5_user0, commandes_lvl5_user1];
effets_commandes_lvl5 = [effets_commandes_lvl5_user0, effets_commandes_lvl5_user1];
valeurs_attendues_lvl5 = [valeurs_attendues_lvl5_user0, valeurs_attendues_lvl5_user1];
erreurs_lvl5 = [erreurs_lvl5_user0, erreurs_lvl5_user1];
changements_utilisateurs_lvl5 = [changements_utilisateurs_lvl5_user0, changements_utilisateurs_lvl5_user1];


//=========== lvl6 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl6 = ["<user>"+nomprenom1+"@CII</user>:<dossier>/</dossier>$ ","<user>"+nomprenom1+"@CII</user>:<dossier>/mail</dossier>$ "];
login_lvl6 = "unlock";
passe_lvl6 = "29/08/29";//

message_lvl6_unlock = "<saisie>Date de naissance (JJ/MM/AA) ?</saisie> ";
message_lvl6_ls0_user0 = "<fichier>birthday.jpg</fichier> &nbsp;<fichier>level1.jpg</fichier> &nbsp;<dossier>mail</dossier>";
liste_message_lvl6_ls_user0 = [message_lvl6_ls0_user0];
message_lvl6_lsl0_user0 = "total 20";
message_lvl6_lsl1_user0 = "---------- 1 "+nomprenom1+" CII 4096 1969-08-30 09:20 <fichier>birthday.jpg</fichier>";
message_lvl6_lsl2_user0 = "---------- 1 "+nomprenom1+" CII 4096 1966-10-26 09:38 <fichier>level1.jpg</fichier>";
message_lvl6_lsl3_user0 = "drwxr-xr-x 4 "+nomprenom1+" CII 8192 1969-09-10 10:57 <dossier>mail</dossier>";
liste_message_lvl6_lsl_user0 = [message_lvl6_lsl0_user0, message_lvl6_lsl1_user0, message_lvl6_lsl2_user0, message_lvl6_lsl3_user0];
message_lvl6_lsa0_user0 = "<fichier>birthday.jpg</fichier> &nbsp;<fichier>data.part02</fichier> &nbsp;<fichier>level1.jpg</fichier> &nbsp;<dossier>mail</dossier>";
liste_message_lvl6_lsa_user0 = [message_lvl6_lsa0_user0];
message_lvl6_lsla0_user0 = "total 20";
message_lvl6_lsla1_user0 = "-rw-r--r-- 1 "+nomprenom1+" CII 4096 1969-09-01 09:20 <fichier>birthday.jpg</fichier>";
message_lvl6_lsla2_user0 = "---------- 1 "+nomprenom1+" CII 2048 1969-07-25 09:13 <fichier>data.part02</fichier>";
message_lvl6_lsla3_user0 = "---------- 1 "+nomprenom1+" CII 4096 1967-02-26 09:38 <fichier>level1.jpg</fichier>";
message_lvl6_lsla4_user0 = "drwxr-xr-x 4 "+nomprenom1+" CII 8192 1969-09-10 09:47 <dossier>mail</dossier>";
liste_message_lvl6_lsla_user0 = [message_lvl6_lsla0_user0, message_lvl6_lsla1_user0, message_lvl6_lsla2_user0, message_lvl6_lsla3_user0, message_lvl6_lsla4_user0];
message_lvl6_ls0_user1 = "<fichier>"+mail3+".mail</fichier> &nbsp;<fichier>"+mail7+".mail</fichier> &nbsp;<fichier>"+mail6+".mail</fichier> &nbsp;<fichier>"+mail2+".mail</fichier>";
liste_message_lvl6_ls_user1 = [message_lvl6_ls0_user1];
message_lvl6_lsl0_user1 = "total 16";
message_lvl6_lsl1_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 1969-08-29 19:00 <fichier>"+mail3+".mail</fichier>";
message_lvl6_lsl2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 1969-08-25 11:24 <fichier>"+mail7+".mail</fichier>";
message_lvl6_lsl3_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 1969-07-10 10:11 <fichier>"+mail6+".mail</fichier>";
message_lvl6_lsl4_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 1969-08-16 10:17 <fichier>"+mail2+".mail</fichier>";
liste_message_lvl6_lsl_user1 = [message_lvl6_lsl0_user1, message_lvl6_lsl1_user1, message_lvl6_lsl2_user1, message_lvl6_lsl3_user1, message_lvl6_lsl4_user1];
message_lvl6_lsa0_user1 = "<dossier>..</dossier> &nbsp;<fichier>"+mail3+".mail</fichier> &nbsp;<fichier>"+mail7+".mail</fichier> &nbsp;<fichier>"+mail6+".mail</fichier> &nbsp;<fichier>"+mail2+".mail</fichier>";
liste_message_lvl6_lsa_user1 = [message_lvl6_lsa0_user1];
message_lvl6_lsla0_user1 = "total 16";
message_lvl6_lsla1_user1 = "drwxr-xr-x 3 "+nomprenom1+" CII 20480 1967-02-25 17:53 <dossier>..</dossier>";
message_lvl6_lsla2_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 &nbsp;1969-08-29 19:00 <fichier>"+mail3+".mail</fichier>";
message_lvl6_lsla3_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 &nbsp;1969-08-25 11:24 <fichier>"+mail7+".mail</fichier>";
message_lvl6_lsla4_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 &nbsp;1969-07-10 10:11 <fichier>"+mail6+".mail</fichier>";
message_lvl6_lsla5_user1 = "-rw-r--r-- 1 "+nomprenom1+" CII 2048 &nbsp;1969-08-16 10:17 <fichier>"+mail2+".mail</fichier>";
liste_message_lvl6_lsla_user1 = [message_lvl6_lsla0_user1, message_lvl6_lsla1_user1, message_lvl6_lsla2_user1, message_lvl6_lsla3_user1, message_lvl6_lsla4_user1, message_lvl6_lsla5_user1];
message_lvl6_fichier0_para0 = "Bonjour,</br>";
message_lvl6_fichier0_para1 = "Vos résultats de recherche ont bien été reçus par nos services.";
message_lvl6_fichier0_para2 = "Je suis certain qu'ils nous seront très utiles.</br>";
message_lvl6_fichier0_para3 = Prenom6+", secteur central";
liste_message_lvl6_fichier0 = [message_lvl6_fichier0_para0, message_lvl6_fichier0_para1, message_lvl6_fichier0_para2, message_lvl6_fichier0_para3];
message_lvl6_fichier1_para0 = "Regarde çà.</br>";
message_lvl6_fichier1_para1 = "Ils ont décidé de retirer la machine à café de la cuisine,";
message_lvl6_fichier1_para2 = Prenom3+" et moi comptons nous plaindre auprès de l'administration ce soir.";
message_lvl6_fichier1_para3 = "Es-tu avec nous ?";
message_lvl6_fichier1_para4 = "Plus on sera nombreux, plus ils nous écouteront.</br>";
message_lvl6_fichier1_para5 = "Ces buraucrates sont vraiment pénibles.</br>";
message_lvl6_fichier1_para6 = Prenom2;
liste_message_lvl6_fichier1 = [message_lvl6_fichier1_para0, message_lvl6_fichier1_para1, message_lvl6_fichier1_para2, message_lvl6_fichier1_para3, message_lvl6_fichier1_para4, message_lvl6_fichier1_para5, message_lvl6_fichier1_para6];
message_lvl6_fichier2_para0 = "Salut "+Prenom1+",</br>";
message_lvl6_fichier2_para1 = "j'ai enfin été admis au niveau 2 !";
message_lvl6_fichier2_para2 = "Toutes ces nuits passées sur les courbes de Schenziel ont finalement payé !";
message_lvl6_fichier2_para3 = "J'ai beaucoup aimé travailler avec toi.";
message_lvl6_fichier2_para4 = "Je ne suis pas sûr que l'on pourra communiquer après mon transfert,";
message_lvl6_fichier2_para5 = "connaissant la manière de fonctionner de la compagnie, cela parait peu probable.</br>";
message_lvl6_fichier2_para6 = "Merci pour tout ce que tu as fait pour moi.</br>";
message_lvl6_fichier2_para7 = Prenom7;
liste_message_lvl6_fichier2 = [message_lvl6_fichier2_para0, message_lvl6_fichier2_para1, message_lvl6_fichier2_para2, message_lvl6_fichier2_para3, message_lvl6_fichier2_para4, message_lvl6_fichier2_para5, message_lvl6_fichier2_para6, message_lvl6_fichier2_para7];
message_lvl6_fichier3_para0 = "Salut Albert,</br>";
message_lvl6_fichier3_para1 = "Ce soir c'est l'anniversaire d'"+Prenom1+". Comme convenu précédemment,";
message_lvl6_fichier3_para2 = "je te donne le montant de ce que tu me dois pour le cadeau commun.</br>";
message_lvl6_fichier3_para3 = "On a fait çà simplement, chacun donnera 10 francs.</br>";
message_lvl6_fichier3_para4 = "On se voit ce soir.</br>";
message_lvl6_fichier3_para5 = Prenom3;
liste_message_lvl6_fichier3 = [message_lvl6_fichier3_para0, message_lvl6_fichier3_para1, message_lvl6_fichier3_para2, message_lvl6_fichier3_para3, message_lvl6_fichier3_para4, message_lvl6_fichier3_para5];
message_lvl6_erreuridentite = "<erreur>Impossible d'ouvrir ce fichier. Votre identité doit d'abord être vérifiée.</erreur>";
liste_message_lvl6_fichier4 = [message_lvl6_erreuridentite];
liste_message_lvl6_aide_user0 = [message_aideunlock, message_aidels, message_aidecat, message_aidecd, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
liste_message_lvl6_aide_user1 = [message_aidels, message_aidecat, message_aidecd, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];
listes_commandes_ls = construire_listes_ls("mail");
liste_commande_lvl6_ls_rep_user0 = listes_commandes_ls.ls_root_rep;
liste_commande_lvl6_lsa_rep_user0 = listes_commandes_ls.lsa_root_rep;
liste_commande_lvl6_lsl_rep_user0 = listes_commandes_ls.lsl_root_rep;
liste_commande_lvl6_lsla_rep_user0 = listes_commandes_ls.lsla_root_rep;
liste_commande_lvl6_ls_root_user1 = listes_commandes_ls.ls_root;
liste_commande_lvl6_lsa_root_user1 = listes_commandes_ls.lsa_root;
liste_commande_lvl6_lsl_root_user1 = listes_commandes_ls.lsl_root;
liste_commande_lvl6_lsla_root_user1 = listes_commandes_ls.lsla_root;
liste_commande_lvl6_ls_rep_user1 = listes_commandes_ls.ls_rep;
liste_commande_lvl6_lsa_rep_user1 = listes_commandes_ls.lsa_rep;
liste_commande_lvl6_lsl_rep_user1 = listes_commandes_ls.lsl_rep;
liste_commande_lvl6_lsla_rep_user1 = listes_commandes_ls.lsla_rep;

commandes_lvl6_user0_cas0 = [["unlock"], liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat birthday.jpg","cat /birthday.jpg"], ["cat data.part02","cat /data.part02"], ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail6+".mail"], ["cat /mail/"+mail2+".mail"], ["cat /mail/"+mail7+".mail"], ["cat /mail/"+mail3+".mail"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl6_user0_cas0 = [[message_lvl6_unlock], liste_message_lvl6_ls_user0, liste_message_lvl6_lsa_user0, liste_message_lvl6_lsl_user0, liste_message_lvl6_lsla_user0, liste_message_lvl6_ls_user1, liste_message_lvl6_lsa_user1, liste_message_lvl6_lsl_user1, liste_message_lvl6_lsla_user1, [message_afficheimage], liste_message_lvl6_fichier4, liste_message_lvl6_fichier4, [], liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanman], [message_aidemanhelp], liste_message_lvl6_aide_user0, [message_intro_lvl6]];
valeurs_attendues_lvl6_user0_cas0 = [passe_lvl6,"","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl6_user0_cas0 = ["<erreur>Date de naissance incorrecte</erreur>","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl6_user0_cas0 = [10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl6_user0 = [commandes_lvl6_user0_cas0];
effets_commandes_lvl6_user0 = [effets_commandes_lvl6_user0_cas0];
valeurs_attendues_lvl6_user0 = [valeurs_attendues_lvl6_user0_cas0];
erreurs_lvl6_user0 = [erreurs_lvl6_user0_cas0];
changements_utilisateurs_lvl6_user0 = [changements_utilisateurs_lvl6_user0_cas0];

commandes_lvl6_user1_cas0 = [liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1, liste_commande_lvl6_lsa_root_user1, liste_commande_lvl6_lsl_root_user1, liste_commande_lvl6_lsla_root_user1, ["cat "+mail6+".mail","cat /mail/"+mail6+".mail"], ["cat "+mail2+".mail","cat /mail/"+mail2+".mail"], ["cat "+mail7+".mail","cat /mail/"+mail7+".mail"], ["cat "+mail3+".mail","cat /mail/"+mail3+".mail"], liste_commande_cdpp, ["cat /birthday.jpg"], ["cat /data.part02"], ["cat /level1.jpg"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl6_user1_cas0 = [liste_message_lvl6_ls_user1, liste_message_lvl6_lsa_user1, liste_message_lvl6_lsl_user1, liste_message_lvl6_lsla_user1, liste_message_lvl6_ls_user0, liste_message_lvl6_lsa_user0, liste_message_lvl6_lsl_user0, liste_message_lvl6_lsla_user0, liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [], [message_afficheimage], liste_message_lvl6_fichier4, liste_message_lvl6_fichier4, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanman], [message_aidemanhelp], liste_message_lvl6_aide_user1, [message_intro_lvl6]];
valeurs_attendues_lvl6_user1_cas0 = [passe_lvl6,"","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl6_user1_cas0 = [message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl6_user1_cas0 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl6_user1 = [commandes_lvl6_user1_cas0];
effets_commandes_lvl6_user1 = [effets_commandes_lvl6_user1_cas0];
valeurs_attendues_lvl6_user1 = [valeurs_attendues_lvl6_user1_cas0];
erreurs_lvl6_user1 = [erreurs_lvl6_user1_cas0];
changements_utilisateurs_lvl6_user1 = [changements_utilisateurs_lvl6_user1_cas0];

commandes_lvl6 = [commandes_lvl6_user0, commandes_lvl6_user1];
effets_commandes_lvl6 = [effets_commandes_lvl6_user0, effets_commandes_lvl6_user1];
valeurs_attendues_lvl6 = [valeurs_attendues_lvl6_user0, valeurs_attendues_lvl6_user1];
erreurs_lvl6 = [erreurs_lvl6_user0, erreurs_lvl6_user1];
changements_utilisateurs_lvl6 = [changements_utilisateurs_lvl6_user0, changements_utilisateurs_lvl6_user1];


//=========== lvl7 ===========
{
	console.log(encodeLevel(0));
	reachCheckpoint()
}
utilisateurs_lvl7 = ["<user>"+nomprenom1+"@CII</user>:<dossier>/</dossier>$ ","<user>"+nomprenom1+"@CII</user>:<dossier>/mail</dossier>$ ","<user>"+nomprenom2+"@CII</user>:<dossier>/</dossier>$ ","<user>"+nomprenom2+"@CII</user>:<dossier>/mail</dossier>$ ","<user>"+nomprenom3+"@CII</user>:<dossier>/</dossier>$ ","<user>"+nomprenom3+"@CII</user>:<dossier>/mail</dossier>$ ","<user>"+nomprenom4+"@CII</user>:<dossier>/</dossier>$ "];
login_lvl7 = "ssh "+nomprenom4;
passe_lvl70 = "demi0077vie";//
passe_lvl71 = "honeywell";//

liste_message_lvl7_ls_user0 = liste_message_lvl6_ls_user0;
liste_message_lvl7_ls_user1 = liste_message_lvl6_ls_user1;
liste_message_lvl7_lsa_user0 = liste_message_lvl6_lsa_user0;
liste_message_lvl7_lsa_user1 = liste_message_lvl6_lsa_user1;
message_lvl7_lsl2_user0 = "-r--r----- 1 "+nomprenom1+" CII 4096 1967-02-26 09:38 <fichier>level1.jpg</fichier>";
liste_message_lvl7_lsl_user0 = [message_lvl6_lsl0_user0, message_lvl6_lsl1_user0, message_lvl7_lsl2_user0, message_lvl6_lsl3_user0];
liste_message_lvl7_lsl_user1 = liste_message_lvl6_lsl_user1;
liste_message_lvl7_lsla_user0_cas0 = [message_lvl6_lsla0_user0, message_lvl6_lsla1_user0, message_lvl6_lsla2_user0, message_lvl7_lsl2_user0, message_lvl6_lsla4_user0];
message_lvl7_lsla2_user0 = "-r-------- 1 "+nomprenom1+" CII 2048 "+date_jeu+"<fichier>data.part02</fichier>";
liste_message_lvl7_lsla_user0_cas1 = [message_lvl6_lsla0_user0, message_lvl6_lsla1_user0, message_lvl7_lsla2_user0, message_lvl7_lsl2_user0, message_lvl6_lsla4_user0];
liste_message_lvl7_lsla_user1 = liste_message_lvl6_lsla_user1;
message_lvl7_fichier0_para0 = "efrlknzeflhfA,t#%JâühRéergôefätg";
message_lvl7_fichier0_para1 = "Voici le mot de passe de l'ordinateur de "+Prenom4+" :";
message_lvl7_fichier0_para2 = "ouebgigubigQuovraibäljb%nükbfnf<-bjcù%";
message_lvl7_fichier0_para3 = "Remplace chaque 4 (quatre) par un 0 (zéro) pour qu'il fonctionne (petit sécurité de ma part).";
message_lvl7_fichier0_para4 = "ohfufto%nükbfnf<-lgiu!gfy%gfioFÔ#GOI";
message_lvl7_fichier0_para5 = "Kim.</br>";
message_lvl7_fichier0_para6 = "<erreur>Ce fichier semble incomplet, la moitié des lignes sont manquantes.</erreur>";
liste_message_lvl7_fichier0 = [message_lvl7_fichier0_para0, message_lvl7_fichier0_para1, message_lvl7_fichier0_para2, message_lvl7_fichier0_para3, message_lvl7_fichier0_para4, message_lvl7_fichier0_para5, message_lvl7_fichier0_para6];
message_lvl7_ls0_user2 = "<fichier>data.txt</fichier> &nbsp;<fichier>level1.jpg</fichier> &nbsp;<dossier>mail</dossier>";
liste_message_lvl7_ls_user2 = [message_lvl7_ls0_user2];
message_lvl7_lsl0_user2 = "total 15";
message_lvl7_lsl1_user2 = "-rw-r--r-- 1 "+nomprenom2+" CII 1536 1969-06-30 09:12 <fichier>data.txt</fichier>";
message_lvl7_lsl2_user2 = "-r--r----- 1 "+nomprenom2+" CII 4096 1966-12-14 09:33 <fichier>level1.jpg</fichier>";
message_lvl7_lsl3_user2 = "drwxr-xr-x 3 "+nomprenom2+" CII 6144 1969-09-11 10:44 <dossier>mail</dossier>";
liste_message_lvl7_lsl_user2 = [message_lvl7_lsl0_user2, message_lvl7_lsl1_user2, message_lvl7_lsl2_user2, message_lvl7_lsl3_user2];
message_lvl7_lsa0_user2 = "<fichier>data.part01</fichier> &nbsp;<fichier>data.txt</fichier> &nbsp;<fichier>level1.jpg</fichier> &nbsp;<dossier>mail</dossier>";
liste_message_lvl7_lsa_user2 = [message_lvl7_lsa0_user2];
message_lvl7_lsla0_user2 = "total 15";
message_lvl7_lsla1_user2_cas1 = "---------- 1 "+nomprenom2+" CII 2048 1969-07-25 09:13 <fichier>data.part01</fichier>";
message_lvl7_lsla1_user2_cas3 = "-r-------- 1 "+nomprenom2+" CII 2048 1969-07-25 09:13 <fichier>data.part01</fichier>";
message_lvl7_lsla2_user2 = "-rw-r--r-- 1 "+nomprenom2+" CII 1536 1969-06-30 09:12 <fichier>data.txt</fichier>";
message_lvl7_lsla3_user2 = "-r--r----- 1 "+nomprenom2+" CII 4096 1966-12-14 09:33 <fichier>level1.jpg</fichier>";
message_lvl7_lsla4_user2 = "drwxr-xr-x 3 "+nomprenom2+" CII 6144 1969-09-11 10:44 <dossier>mail</dossier>";
liste_message_lvl7_lsla_user2_cas1 = [message_lvl7_lsla0_user2, message_lvl7_lsla1_user2_cas1, message_lvl7_lsla2_user2, message_lvl7_lsla3_user2, message_lvl7_lsla4_user2];
liste_message_lvl7_lsla_user2_cas3 = [message_lvl7_lsla0_user2, message_lvl7_lsla1_user2_cas3, message_lvl7_lsla2_user2, message_lvl7_lsla3_user2, message_lvl7_lsla4_user2];
message_lvl7_ls0_user3 = "<fichier>"+mail3+".mail</fichier> &nbsp;<fichier>"+mail3+"2.mail</fichier> &nbsp;<fichier>"+mail5+".mail</fichier>";
liste_message_lvl7_ls_user3 = [message_lvl7_ls0_user3];
message_lvl7_lsl0_user3 = "total 12";
message_lvl7_lsla0_user3 = "drwxr-xr-x 3 "+nomprenom2+" CII 13824 1969-09-11 11:12 <dossier>..</dossier>";
message_lvl7_lsl1_user3 = "-rw-r--r-- 1 "+nomprenom2+" CII 2048 &nbsp;1969-09-11 11:12 <fichier>"+mail3+".mail</fichier>";
message_lvl7_lsl2_user3 = "-rw-r--r-- 1 "+nomprenom2+" CII 2048 &nbsp;1969-09-11 14:03 <fichier>"+mail3+"2.mail</fichier>";
message_lvl7_lsl3_user3 = "-rw-r--r-- 1 "+nomprenom2+" CII 2048 &nbsp;1969-09-08 08:25 <fichier>"+mail5+".mail</fichier>";
liste_message_lvl7_lsl_user3 = [message_lvl7_lsl0_user3, message_lvl7_lsl1_user3, message_lvl7_lsl2_user3, message_lvl7_lsl3_user3];
message_lvl7_lsa0_user3 = "<dossier>..</dossier> &nbsp;<fichier>"+mail3+".mail</fichier> &nbsp;<fichier>"+mail3+"2.mail</fichier> &nbsp;<fichier>"+mail5+".mail</fichier>";
liste_message_lvl7_lsa_user3 = [message_lvl7_lsa0_user3];
liste_message_lvl7_lsla_user3 = [message_lvl7_lsl0_user3, message_lvl7_lsla0_user3, message_lvl7_lsl1_user3, message_lvl7_lsl2_user3, message_lvl7_lsl3_user3];
message_lvl7_fichier1_para0 = "Generator : 1.12 gigawatts";
message_lvl7_fichier1_para1 = "Temperature : 450°C";
message_lvl7_fichier1_para2 = "Fusion : NO";
message_lvl7_fichier1_para3 = "Damage : 7.1";
message_lvl7_fichier1_para4 = "Test_ID : 112-458";
liste_message_lvl7_fichier1 = [message_lvl7_fichier1_para0, message_lvl7_fichier1_para1, message_lvl7_fichier1_para2, message_lvl7_fichier1_para3, message_lvl7_fichier1_para4];
message_lvl7_fichier2_para0 = "Salut "+Prenom2+"</br>";
message_lvl7_fichier2_para1 = "Ecoute, pour la machine à café, il n'y a rien que je puisse faire,";
message_lvl7_fichier2_para2 = "nous n'avons pas de budget pour cela. Ce n'est pas à moi de prendre la décision.";
message_lvl7_fichier2_para3 = "Désolé.</br>";
message_lvl7_fichier2_para4 = Prenom8;
liste_message_lvl7_fichier2 = [message_lvl7_fichier2_para0, message_lvl7_fichier2_para1, message_lvl7_fichier2_para2, message_lvl7_fichier2_para3, message_lvl7_fichier2_para4];
message_lvl7_fichier3_para0 = Prenom2+",</br>";
message_lvl7_fichier3_para1 = "Ca fait un moment que je t'ai demandé les 10\u20AC pour l'anniversaire de "+Prenom1+",";
message_lvl7_fichier3_para2 = "j'apprécierais que tu me les donnes quand on mangera ensemble ce midi.</br>";
message_lvl7_fichier3_para3 = "Amicalement,</br>";
message_lvl7_fichier3_para4 = Prenom3;
liste_message_lvl7_fichier3 = [message_lvl7_fichier3_para0, message_lvl7_fichier3_para1, message_lvl7_fichier3_para2, message_lvl7_fichier3_para3, message_lvl7_fichier3_para4];
message_lvl7_fichier4_para0 = "Merci pour les 10\u20AC. Dommage que tu aies oublié de prendre davantage de monnaie pour payer le repas.";
message_lvl7_fichier4_para1 = "C'est bon pour cette fois.</br>";
message_lvl7_fichier4_para2 = Prenom3;
liste_message_lvl7_fichier4 = [message_lvl7_fichier4_para0, message_lvl7_fichier4_para1, message_lvl7_fichier4_para2];
message_lvl7_fichier5_para0 = "Le nom de l'ordinateur de "+Prenom4+" est "+nomprenom4+".";
message_lvl7_fichier5_para1 = "efrlknzeflhféergôefätg";
message_lvl7_fichier5_para2 = "demi4477vie";
message_lvl7_fichier5_para3 = "ouebgigubigQuovraibäljb%nü";
message_lvl7_fichier5_para4 = "Passe une bonne journée.";
message_lvl7_fichier5_para5 = "ohfuftolgiugfygfioFÔGOI</br>";
message_lvl7_fichier5_para6 = "<erreur>Ce fichier semble incomplet, la moitié des lignes sont manquantes.</erreur>";
liste_message_lvl7_fichier5 = [message_lvl7_fichier5_para0, message_lvl7_fichier5_para1, message_lvl7_fichier5_para2, message_lvl7_fichier5_para3, message_lvl7_fichier5_para4, message_lvl7_fichier5_para5, message_lvl7_fichier5_para6];
message_lvl7_ls0_user4 = "<fichier>level1.jpg</fichier> &nbsp;<dossier>mail</dossier>";
liste_message_lvl7_ls_user4 = [message_lvl7_ls0_user4];
message_lvl7_lsl0_user4 = "total 22";
message_lvl7_lsl1_user4 = "-rw-r--r-- 1 "+nomprenom3+" CII 4096 1967-01-20 11:12 <fichier>level1.jpg</fichier>";
message_lvl7_lsl2_user4 = "drwxr-xr-x 2 "+nomprenom3+" CII 3072 1969-09-13 14:03 <dossier>mail</dossier>";
liste_message_lvl7_lsl_user4 = [message_lvl7_lsl0_user4, message_lvl7_lsl1_user4, message_lvl7_lsl2_user4];
message_lvl7_ls0_user5 = "<fichier>attach.mail</fichier> &nbsp;<fichier>"+mail2+".mail</fichier>";
liste_message_lvl7_ls_user5 = [message_lvl7_ls0_user5];
message_lvl7_lsl0_user5 = "total 22";
message_lvl7_lsla0_user5 = "drwxr-xr-x 2 "+nomprenom3+" CII 11264 1969-09-13 10:03 <dossier>..</dossier>";
message_lvl7_lsl1_user5 = "-rw-r--r-- 1 "+nomprenom3+" CII 1024 &nbsp;1969-05-03 09:43 <fichier>attach.mail</fichier>";
message_lvl7_lsl2_user5 = "-rw-r--r-- 1 "+nomprenom3+" CII 2048 &nbsp;1969-05-03 09:43 <fichier>"+mail2+".mail</fichier>";
liste_message_lvl7_lsl_user5 = [message_lvl7_lsl0_user5, message_lvl7_lsl1_user5, message_lvl7_lsl2_user5];
message_lvl7_lsa0_user5 = "<dossier>..</dossier> &nbsp;<fichier>attach.mail</fichier> &nbsp;<fichier>"+mail2+".mail</fichier>";
liste_message_lvl7_lsa_user5 = [message_lvl7_lsa0_user5];
liste_message_lvl7_lsla_user5 = [message_lvl7_lsl0_user5, message_lvl7_lsla0_user5, message_lvl7_lsl1_user5, message_lvl7_lsl2_user5];
message_lvl7_fichier6_para0 = Prenom3+",</br>";
message_lvl7_fichier6_para1 = "J'ai attaché à ce mail un fichier contenant mon mot de passe pour que tu puisses jeter un oeil à mon ordinateur.";
message_lvl7_fichier6_para2 = "Je ne suis pas certain de savoir d'où viennent ces fichiers bizarres.</br>";
message_lvl7_fichier6_para3 = "Amicalement,</br>";
message_lvl7_fichier6_para4 = Prenom2;
liste_message_lvl7_fichier6 = [message_lvl7_fichier6_para0, message_lvl7_fichier6_para1, message_lvl7_fichier6_para2, message_lvl7_fichier6_para3, message_lvl7_fichier6_para4];
message_lvl7_fichier7_para0 = "Nom : "+nomprenom2+"";
message_lvl7_fichier7_para1 = "Mot de passe : "+passe_lvl71;
liste_message_lvl7_fichier7 = [message_lvl7_fichier7_para0, message_lvl7_fichier7_para1];
liste_message_lvl7_aide = [message_aidels, message_aidecat, message_aidecd, message_aidessh, message_aidechmod, message_aidesudo, message_aideman, message_aidehelp, message_aidemotd, message_aidecommand];

commandes_lvl7_user0_cas0 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat birthday.jpg","cat /birthday.jpg"], ["cat data.part02","cat /data.part02"], ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail6+".mail"], ["cat /mail/"+mail2+".mail"], ["cat /mail/"+mail7+".mail"], ["cat /mail/"+mail3+".mail"], ["chmod u+r data.part02","chmod u+r /data.part02"], ["sudo chmod u+r data.part02","sudo chmod u+r /data.part02"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user0_cas0 = [[message_invitemotdepasse],[],[message_invitemotdepasse],[], liste_message_lvl7_ls_user0, liste_message_lvl7_lsa_user0, liste_message_lvl7_lsl_user0, liste_message_lvl7_lsla_user0_cas0, liste_message_lvl7_ls_user1, liste_message_lvl7_lsa_user1, liste_message_lvl7_lsl_user1, liste_message_lvl7_lsla_user1, [message_afficheimage], [message_erreuradmincat], [message_afficheimage], [], liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user0_cas0 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user0_cas0 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user0_cas0 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user0_cas1 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat birthday.jpg","cat /birthday.jpg"], ["cat data.part02","cat /data.part02"], ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail6+".mail"], ["cat /mail/"+mail2+".mail"], ["cat /mail/"+mail7+".mail"], ["cat /mail/"+mail3+".mail"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user0_cas1 = [[message_invitemotdepasse],[],[message_invitemotdepasse],[], liste_message_lvl7_ls_user0, liste_message_lvl7_lsa_user0, liste_message_lvl7_lsl_user0, liste_message_lvl7_lsla_user0_cas1, liste_message_lvl7_ls_user1, liste_message_lvl7_lsa_user1, liste_message_lvl7_lsl_user1, liste_message_lvl7_lsla_user1, [message_afficheimage], liste_message_lvl7_fichier0, [message_afficheimage], [], liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user0_cas1 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user0_cas1 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user0_cas1 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user1_cas0 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1, liste_commande_lvl6_lsa_root_user1, liste_commande_lvl6_lsl_root_user1, liste_commande_lvl6_lsla_root_user1, ["cat "+mail6+".mail","cat /mail/"+mail6+".mail"], ["cat "+mail2+".mail","cat /mail/"+mail2+".mail"], ["cat "+mail7+".mail","cat /mail/"+mail7+".mail"], ["cat "+mail3+".mail","cat /mail/"+mail3+".mail"], liste_commande_cdpp, ["cat /birthday.jpg"], ["cat /data.part02"], ["cat /level1.jpg"], ["chmod u+r /data.part02"], ["sudo chmod u+r /data.part02"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user1_cas0 = [[message_invitemotdepasse],[],[message_invitemotdepasse],[], liste_message_lvl7_ls_user1, liste_message_lvl7_lsa_user1, liste_message_lvl7_lsl_user1, liste_message_lvl7_lsla_user1, liste_message_lvl7_ls_user0, liste_message_lvl7_lsa_user0, liste_message_lvl7_lsl_user0, liste_message_lvl7_lsla_user0_cas0, liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [], [message_afficheimage], [message_erreuradmincat], [message_afficheimage], [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user1_cas0 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user1_cas0 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user1_cas0 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user1_cas1 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1, liste_commande_lvl6_lsa_root_user1, liste_commande_lvl6_lsl_root_user1, liste_commande_lvl6_lsla_root_user1, ["cat "+mail6+".mail","cat /mail/"+mail6+".mail"], ["cat "+mail2+".mail","cat /mail/"+mail2+".mail"], ["cat "+mail7+".mail","cat /mail/"+mail7+".mail"], ["cat "+mail3+".mail","cat /mail/"+mail3+".mail"], liste_commande_cdpp, ["cat /birthday.jpg"], ["cat /data.part02"], ["cat /level1.jpg"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user1_cas1 = [[message_invitemotdepasse],[],[message_invitemotdepasse],[], liste_message_lvl7_ls_user1, liste_message_lvl7_lsa_user1, liste_message_lvl7_lsl_user1, liste_message_lvl7_lsla_user1, liste_message_lvl7_ls_user0, liste_message_lvl7_lsa_user0, liste_message_lvl7_lsl_user0, liste_message_lvl7_lsla_user0_cas1, liste_message_lvl6_fichier0, liste_message_lvl6_fichier1, liste_message_lvl6_fichier2, liste_message_lvl6_fichier3, [], [message_afficheimage], liste_message_lvl7_fichier0, [message_afficheimage], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user1_cas1 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user1_cas1 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user1_cas1 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user2_cas1 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat data.txt","cat /data.txt"], ["cat data.part01","cat /data.part01"], ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail5+".mail"], ["cat /mail/"+mail3+".mail"], ["cat /mail/"+mail3+"2.mail"], ["chmod u+r data.part01","chmod u+r /data.part01"], ["sudo chmod u+r data.part01","sudo chmod u+r /data.part01"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user2_cas1 = [[message_invitemotdepasse], [], [message_invitemotdepasse], [], liste_message_lvl7_ls_user2, liste_message_lvl7_lsa_user2, liste_message_lvl7_lsl_user2, liste_message_lvl7_lsla_user2_cas1, liste_message_lvl7_ls_user3, liste_message_lvl7_lsa_user3, liste_message_lvl7_lsl_user3, liste_message_lvl7_lsla_user3, liste_message_lvl7_fichier1, [message_erreuradmincat], [message_afficheimage], [], liste_message_lvl7_fichier2, liste_message_lvl7_fichier3, liste_message_lvl7_fichier4, [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user2_cas1 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user2_cas1 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user2_cas1 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user2_cas3 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_ls_root, liste_commande_lsa_root, liste_commande_lsl_root, liste_commande_lsla_root, liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat data.txt","cat /data.txt"], ["cat data.part01","cat /data.part01"], ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail5+".mail"], ["cat /mail/"+mail3+".mail"], ["cat /mail/"+mail3+"2.mail"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user2_cas3 = [[message_invitemotdepasse], [], [message_invitemotdepasse], [], liste_message_lvl7_ls_user2, liste_message_lvl7_lsa_user2, liste_message_lvl7_lsl_user2, liste_message_lvl7_lsla_user2_cas3, liste_message_lvl7_ls_user3, liste_message_lvl7_lsa_user3, liste_message_lvl7_lsl_user3, liste_message_lvl7_lsla_user3, liste_message_lvl7_fichier1, liste_message_lvl7_fichier5, [message_afficheimage], [], liste_message_lvl7_fichier2, liste_message_lvl7_fichier3, liste_message_lvl7_fichier4, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user2_cas3 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user2_cas3 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user2_cas3 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user3_cas1 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1, liste_commande_lvl6_lsa_root_user1, liste_commande_lvl6_lsl_root_user1, liste_commande_lvl6_lsla_root_user1, ["cat "+mail5+".mail","cat /mail/"+mail5+".mail"], ["cat "+mail3+".mail","cat /mail/"+mail3+".mail"], ["cat "+mail3+"2.mail","cat /mail/"+mail3+"2.mail"], liste_commande_cdpp, ["cat /data.txt"], ["cat /data.part01"], ["cat /level1.jpg"], ["chmod u+r /data.part02"], ["sudo chmod u+r /data.part02"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user3_cas1 = [[message_invitemotdepasse], [], [message_invitemotdepasse], [], liste_message_lvl7_ls_user3, liste_message_lvl7_lsa_user3, liste_message_lvl7_lsl_user3, liste_message_lvl7_lsla_user3, liste_message_lvl7_ls_user2, liste_message_lvl7_lsa_user2, liste_message_lvl7_lsl_user2, liste_message_lvl7_lsla_user2_cas1, liste_message_lvl7_fichier2, liste_message_lvl7_fichier3, liste_message_lvl7_fichier4, [], liste_message_lvl7_fichier1, [message_erreuradmincat], [message_afficheimage], [message_erreuradmin], [], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user3_cas1 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user3_cas1 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user3_cas1 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user3_cas3 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1, liste_commande_lvl6_lsa_root_user1, liste_commande_lvl6_lsl_root_user1, liste_commande_lvl6_lsla_root_user1, ["cat "+mail5+".mail","cat /mail/"+mail5+".mail"], ["cat "+mail3+".mail","cat /mail/"+mail3+".mail"], ["cat "+mail3+"2.mail","cat /mail/"+mail3+"2.mail"], liste_commande_cdpp, ["cat /data.txt"], ["cat /data.part01"], ["cat /level1.jpg"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user3_cas3 = [[message_invitemotdepasse], [], [message_invitemotdepasse], [], liste_message_lvl7_ls_user3, liste_message_lvl7_lsa_user3, liste_message_lvl7_lsl_user3, liste_message_lvl7_lsla_user3, liste_message_lvl7_ls_user2, liste_message_lvl7_lsa_user2, liste_message_lvl7_lsl_user2, liste_message_lvl7_lsla_user2_cas3, liste_message_lvl7_fichier2, liste_message_lvl7_fichier3, liste_message_lvl7_fichier4, [], liste_message_lvl7_fichier1, liste_message_lvl7_fichier5, [message_afficheimage], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user3_cas3 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user3_cas3 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user3_cas3 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user4_cas0 = [["ssh "+nomprenom4],["ssh "+nomprenom1],["ssh "+nomprenom2],["ssh "+nomprenom3], liste_commande_ls_root.concat(liste_commande_lsa_root), liste_commande_lsl_root.concat(liste_commande_lsla_root), liste_commande_lvl6_ls_rep_user0, liste_commande_lvl6_lsa_rep_user0, liste_commande_lvl6_lsl_rep_user0, liste_commande_lvl6_lsla_rep_user0, ["cat level1.jpg","cat /level1.jpg"], ["cd mail","cd /mail"], ["cat /mail/"+mail2+".mail"], ["cat /mail/attach.mail"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user4_cas0 = [[message_invitemotdepasse], [], [message_invitemotdepasse], [], liste_message_lvl7_ls_user4, liste_message_lvl7_lsl_user4, liste_message_lvl7_ls_user5, liste_message_lvl7_lsa_user5, liste_message_lvl7_lsl_user5, liste_message_lvl7_lsla_user5, [message_afficheimage], [], liste_message_lvl7_fichier6, liste_message_lvl7_fichier7, [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user4_cas0 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user4_cas0 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user4_cas0 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user5_cas0 = [["ssh "+nomprenom4], ["ssh "+nomprenom1], ["ssh "+nomprenom2], ["ssh "+nomprenom3], liste_commande_lvl6_ls_rep_user1, liste_commande_lvl6_lsa_rep_user1, liste_commande_lvl6_lsl_rep_user1, liste_commande_lvl6_lsla_rep_user1, liste_commande_lvl6_ls_root_user1.concat(liste_commande_lvl6_lsa_root_user1), liste_commande_lvl6_lsl_root_user1.concat(liste_commande_lvl6_lsla_root_user1), ["cat "+mail2+".mail","cat /mail/"+mail2+".mail"], ["cat attach.mail","cat /mail/attach.mail"], liste_commande_cdpp, ["cat /level1.jpg"], liste_commande_manls, liste_commande_mancat, liste_commande_mancd, liste_commande_manssh, liste_commande_manchmod, liste_commande_mansudo, liste_commande_manman, liste_commande_manhelp, liste_commande_help, liste_commande_motd];
effets_commandes_lvl7_user5_cas0 = [[message_invitemotdepasse],[],[message_invitemotdepasse],[], liste_message_lvl7_ls_user5, liste_message_lvl7_lsa_user5, liste_message_lvl7_lsl_user5, liste_message_lvl7_lsla_user5, liste_message_lvl7_ls_user4, liste_message_lvl7_lsl_user4, liste_message_lvl7_fichier6, liste_message_lvl7_fichier7, [], [message_afficheimage], [message_aidemanls], [message_aidemancat], [message_aidemancd], [message_aidemanssh], [message_aidemanchmod], [message_aidemansudo], [message_aidemanman], [message_aidemanhelp], liste_message_lvl7_aide, [message_intro_lvl7]];
valeurs_attendues_lvl7_user5_cas0 = [passe_lvl70,"",passe_lvl71,"","","","","","","","","","","","","","","","","","","","",""];
erreurs_lvl7_user5_cas0 = [message_erreurmotdepasse,"",message_erreurmotdepasse,"","","","","","","","","","","","","","","","","","","","",""];
changements_utilisateurs_lvl7_user5_cas0 = [10,0,2,4,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

commandes_lvl7_user0 = [commandes_lvl7_user0_cas0, commandes_lvl7_user0_cas1, commandes_lvl7_user0_cas0, commandes_lvl7_user0_cas1];
effets_commandes_lvl7_user0 = [effets_commandes_lvl7_user0_cas0, effets_commandes_lvl7_user0_cas1, effets_commandes_lvl7_user0_cas0, effets_commandes_lvl7_user0_cas1];
valeurs_attendues_lvl7_user0 = [valeurs_attendues_lvl7_user0_cas0, valeurs_attendues_lvl7_user0_cas1, valeurs_attendues_lvl7_user0_cas0, valeurs_attendues_lvl7_user0_cas1];
erreurs_lvl7_user0 = [erreurs_lvl7_user0_cas0, erreurs_lvl7_user0_cas1, erreurs_lvl7_user0_cas0, erreurs_lvl7_user0_cas1];
changements_utilisateurs_lvl7_user0 = [changements_utilisateurs_lvl7_user0_cas0, changements_utilisateurs_lvl7_user0_cas1, changements_utilisateurs_lvl7_user0_cas0, changements_utilisateurs_lvl7_user0_cas1];

commandes_lvl7_user1 = [commandes_lvl7_user1_cas0, commandes_lvl7_user1_cas1, commandes_lvl7_user1_cas0, commandes_lvl7_user1_cas1];
effets_commandes_lvl7_user1 = [effets_commandes_lvl7_user1_cas0, effets_commandes_lvl7_user1_cas1, effets_commandes_lvl7_user1_cas0, effets_commandes_lvl7_user1_cas1];
valeurs_attendues_lvl7_user1 = [valeurs_attendues_lvl7_user1_cas0, valeurs_attendues_lvl7_user1_cas1, valeurs_attendues_lvl7_user1_cas0, valeurs_attendues_lvl7_user1_cas1];
erreurs_lvl7_user1 = [erreurs_lvl7_user1_cas0, erreurs_lvl7_user1_cas1, erreurs_lvl7_user1_cas0, erreurs_lvl7_user1_cas1];
changements_utilisateurs_lvl7_user1 = [changements_utilisateurs_lvl7_user1_cas0, changements_utilisateurs_lvl7_user1_cas1, changements_utilisateurs_lvl7_user1_cas0, changements_utilisateurs_lvl7_user1_cas1];

commandes_lvl7_user2 = [commandes_lvl7_user2_cas1, commandes_lvl7_user2_cas1, commandes_lvl7_user2_cas3, commandes_lvl7_user2_cas3];
effets_commandes_lvl7_user2 = [effets_commandes_lvl7_user2_cas1, effets_commandes_lvl7_user2_cas1, effets_commandes_lvl7_user2_cas3, effets_commandes_lvl7_user2_cas3];
valeurs_attendues_lvl7_user2 = [valeurs_attendues_lvl7_user2_cas1, valeurs_attendues_lvl7_user2_cas1, valeurs_attendues_lvl7_user2_cas3, valeurs_attendues_lvl7_user2_cas3];
erreurs_lvl7_user2 = [erreurs_lvl7_user2_cas1, erreurs_lvl7_user2_cas1, erreurs_lvl7_user2_cas3, erreurs_lvl7_user2_cas3];
changements_utilisateurs_lvl7_user2 = [changements_utilisateurs_lvl7_user2_cas1, changements_utilisateurs_lvl7_user2_cas1, changements_utilisateurs_lvl7_user2_cas3, changements_utilisateurs_lvl7_user2_cas3];

commandes_lvl7_user3 = [commandes_lvl7_user3_cas1, commandes_lvl7_user3_cas1, commandes_lvl7_user3_cas3, commandes_lvl7_user3_cas3];
effets_commandes_lvl7_user3 = [effets_commandes_lvl7_user3_cas1, effets_commandes_lvl7_user3_cas1, effets_commandes_lvl7_user3_cas3, effets_commandes_lvl7_user3_cas3];
valeurs_attendues_lvl7_user3 = [valeurs_attendues_lvl7_user3_cas1, valeurs_attendues_lvl7_user3_cas1, valeurs_attendues_lvl7_user3_cas3, valeurs_attendues_lvl7_user3_cas3];
erreurs_lvl7_user3 = [erreurs_lvl7_user3_cas1, erreurs_lvl7_user3_cas1, erreurs_lvl7_user3_cas3, erreurs_lvl7_user3_cas3];
changements_utilisateurs_lvl7_user3 = [changements_utilisateurs_lvl7_user3_cas1, changements_utilisateurs_lvl7_user3_cas1, changements_utilisateurs_lvl7_user3_cas3, changements_utilisateurs_lvl7_user3_cas3];

commandes_lvl7_user4 = [commandes_lvl7_user4_cas0, commandes_lvl7_user4_cas0, commandes_lvl7_user4_cas0, commandes_lvl7_user4_cas0];
effets_commandes_lvl7_user4 = [effets_commandes_lvl7_user4_cas0, effets_commandes_lvl7_user4_cas0, effets_commandes_lvl7_user4_cas0, effets_commandes_lvl7_user4_cas0];
valeurs_attendues_lvl7_user4 = [valeurs_attendues_lvl7_user4_cas0, valeurs_attendues_lvl7_user4_cas0, valeurs_attendues_lvl7_user4_cas0, valeurs_attendues_lvl7_user4_cas0];
erreurs_lvl7_user4 = [erreurs_lvl7_user4_cas0, erreurs_lvl7_user4_cas0, erreurs_lvl7_user4_cas0, erreurs_lvl7_user4_cas0];
changements_utilisateurs_lvl7_user4 = [changements_utilisateurs_lvl7_user4_cas0, changements_utilisateurs_lvl7_user4_cas0, changements_utilisateurs_lvl7_user4_cas0, changements_utilisateurs_lvl7_user4_cas0];

commandes_lvl7_user5 = [commandes_lvl7_user5_cas0, commandes_lvl7_user5_cas0, commandes_lvl7_user5_cas0, commandes_lvl7_user5_cas0];
effets_commandes_lvl7_user5 = [effets_commandes_lvl7_user5_cas0, effets_commandes_lvl7_user5_cas0, effets_commandes_lvl7_user5_cas0, effets_commandes_lvl7_user5_cas0];
valeurs_attendues_lvl7_user5 = [valeurs_attendues_lvl7_user5_cas0, valeurs_attendues_lvl7_user5_cas0, valeurs_attendues_lvl7_user5_cas0, valeurs_attendues_lvl7_user5_cas0];
erreurs_lvl7_user5 = [erreurs_lvl7_user5_cas0, erreurs_lvl7_user5_cas0, erreurs_lvl7_user5_cas0, erreurs_lvl7_user5_cas0];
changements_utilisateurs_lvl7_user5 = [changements_utilisateurs_lvl7_user5_cas0, changements_utilisateurs_lvl7_user5_cas0, changements_utilisateurs_lvl7_user5_cas0, changements_utilisateurs_lvl7_user5_cas0];

commandes_lvl7 = [commandes_lvl7_user0, commandes_lvl7_user1, commandes_lvl7_user2, commandes_lvl7_user3, commandes_lvl7_user4, commandes_lvl7_user5];
effets_commandes_lvl7 = [effets_commandes_lvl7_user0, effets_commandes_lvl7_user1, effets_commandes_lvl7_user2, effets_commandes_lvl7_user3, effets_commandes_lvl7_user4, effets_commandes_lvl7_user5];
valeurs_attendues_lvl7 = [valeurs_attendues_lvl7_user0, valeurs_attendues_lvl7_user1, valeurs_attendues_lvl7_user2, valeurs_attendues_lvl7_user3, valeurs_attendues_lvl7_user4, valeurs_attendues_lvl7_user5];
erreurs_lvl7 = [erreurs_lvl7_user0, erreurs_lvl7_user1, erreurs_lvl7_user2, erreurs_lvl7_user3, erreurs_lvl7_user4, erreurs_lvl7_user5];
changements_utilisateurs_lvl7 = [changements_utilisateurs_lvl7_user0, changements_utilisateurs_lvl7_user1, changements_utilisateurs_lvl7_user2, changements_utilisateurs_lvl7_user3, changements_utilisateurs_lvl7_user4, changements_utilisateurs_lvl7_user5];


//================================================================================================
//Fonctions
//================================================================================================

var fonction_cas = function (lvl, cas, saisie, num_utilisateur_courant) {
	if (lvl == 3) {
		if ((saisie == commandes_lvl3_user0_cas0[9][0]) && (cas == 0)) {			
			cas = 1;
		}
		if ((saisie == commandes_lvl3_user0_cas1[9][0]) && (cas == 1)) {
			cas = 0;
		}
	}
	if (lvl == 5) {
		if ((saisie == commandes_lvl5_user0_cas0[6][0]) && (cas == 0)) {
			cas = 1;
		}
		if (((commandes_lvl5_user0_cas1[10].indexOf(saisie) > -1) && (num_utilisateur_courant == 0)) || ((commandes_lvl5_user1_cas1[8].indexOf(saisie) > -1) && (num_utilisateur_courant == 1)) && (cas == 1)) {
			cas = 2;
		}
		if ((((saisie == commandes_lvl5_user0_cas2[10][0]) && (num_utilisateur_courant == 0)) || ((saisie == commandes_lvl5_user1_cas2[8][0]) && (num_utilisateur_courant == 1))) && (cas == 2)) {
			cas = 1;
		}
	}
	if (lvl == 7) {
		if ((cas == 0) && (((saisie == commandes_lvl7_user0_cas0[21][0]) && (num_utilisateur_courant == 0)) || ((saisie == commandes_lvl7_user1_cas0[21][0]) && (num_utilisateur_courant <= 1)))) {
			cas = 1;
		}
		if ((cas == 0) && (((saisie == commandes_lvl7_user2_cas1[20][0]) && (num_utilisateur_courant == 2)) || ((saisie == commandes_lvl7_user3_cas1[20][0]) && (num_utilisateur_courant <= 3)))) {
			cas = 2;
		}
		if ((cas == 2) && (((saisie == commandes_lvl7_user0_cas0[21][0]) && (num_utilisateur_courant == 0)) || ((saisie == commandes_lvl7_user1_cas0[21][0]) && (num_utilisateur_courant <= 1)))) {
			cas = 3;
		}
		if ((cas == 1) && (((saisie == commandes_lvl7_user2_cas1[20][0]) && (num_utilisateur_courant == 2)) || ((saisie == commandes_lvl7_user3_cas1[20][0]) && (num_utilisateur_courant <= 3)))) {
			cas = 3;
		}
	}
	return cas;
}

var fin_chapitre = function (lvl, saisie, valeur_attendue) {
	if ((lvl == 8) && (saisie == valeur_attendue)) {
		return true;
	}
	else if ((lvl == 9) && (saisie == valeur_attendue)) {
		return true;
	}
	else {
		return false;
	}
}