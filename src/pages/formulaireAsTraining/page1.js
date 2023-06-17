import React from 'react'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import "./entrepreneur.css"

function Marche() {
    return (  

    <form action="">

        <div class="container">

             <ol type="I">
                    <h2><li>MARCHE A PENETRER PAR L'ENTREPRISE</li></h2>
                     <p>L'entreprise entrera sur les circonscriptions de marchés que sont:</p>
                     <ul>
                        <table>
                         <tr><li><td> D'abord sur un marché local qu'est: </td><td><input type="text" placeholder="a saisir s'il vous plaît" required/></td></li></tr>
                         <tr><li><td>Ensuite sur un marché local dispersé qu'est:</td> <td><input type="text" placeholder="a saisir s'il vous plaît" required/></td></li></tr>
                         <tr><li><td>Aussi sur un marché national qu'est:</td> <td><input type="text" placeholder="a saisir s'il vous plaît"/></td></li></tr> 
                         <tr><li><td>Enfin sur un marché regional qu'est:</td> <td><input type="text" placeholder="a saisir s'il vous plaît"/></td></li></tr> 
                         <tr><li><td> Et sur un marché régional qu'est:</td> <td> <input type="text" placeholder="a saisir s'il vous plaît"/>  </td></li></tr>
                        </table>
                     </ul>


                     <h2><li>ETUDE DE LA CONCURRENCE</li></h2>

                     <p>Letude de la concurence révèle que plusieurs (entreprise / personnel) : <input type="text" required/> exercent dans ce domaine depuis : (années) <input type="text"/><br/><br/>
                        Les plus reputées sont(listes des entreprises concurrentes de renom): <br/><textarea name="" id="" cols="60" rows="10"></textarea><br/><br/>
                        Elle se localise généralement à: <input type="text" required/><br/><br/>
                        Elles proposent les (services ou produits) que sont : <br/>
                        <textarea name="" id="" cols="60" rows="10" placeholder="à saisir s'il vous plaît.............." required></textarea>
                         Elles s'approvisionnent en moyenne (frequence): <span><input type="text" required/></span> fois par (jour /semaine /mois /an)
                        <span><input type="text" required/></span> en matière première auprès de leurs fournisseurs situés à <input type="text" required/>
                        pour des tarifs variant de <span><input type="text" required/></span> à <span><input type="text"/></span> par approvisionnement. <br/>
                        Ces entreprises emploient géneralement (nombre d'employés): <span><input type="text" required/></span> personnes qu'elle rémunèrent en moyenne à 
                        <span><input type="text" required/></span> par (heure /jour /semaine /quinzaine /mois)<span><input type="text"/></span>
                        selon les tâches qui les ont assignés et réalisent des chiffres d'affaires mensuels qui varient de <span><input type="text" required/></span>
                        FCFA   à <span><input type="text" required/></span> FCFA pour un bénefice moyen mensuel de FCFA realisé. <br/>
                        Pour faire leur promotion, elles procèdent par les moyens suivant: <input type="text" required/><br/> <br/> 
                         Les principales forces de ces entreprises sont: <br/>
                         <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea><br/>
                         Leurs faiblesses sont les suivantes: <br/>
                         <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea>
                    </p> <br/>
                    
                    
                    <h2><li>ETUDE DE LA CLIENTELE</li></h2>        
                    <p>
                        Etude du marché révèle que les principaux client de ces services ou produit sont les suivants: <input type="text" required/><br/>
                        Ceux-ci habitent les localités que sont <input type="text"/><br/>
                        ils ont un Pouvoir d'achat (faible /moyen /elevé): <input type="text" required/> et ils achètent ces (produits / services) 
                        en moyenne <span><input type="text"/></span> fois par (semaine /quinzaine /mois). pour des montants variant de <span><input type="text" required/></span> FCFA à <span><input type="text" required/></span>FCFA. <br/>
                        Leurs produits ou services de consommation préférés sont: <br/>
                        <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea><br/>
                        Les elements que les clients apprécient au niveau de ces produits ou services sont les suivants: <br/>
                        <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea><br/>
                        Les elements que les clients déprécient au niveau de cCes entreprises emploient géneralement (nombre d'employés): ￼ personnes qu'elle rémunèrent en moyenne à ￼ par (heure /jour /semaine /quinzaine /mois)￼ selon les tâches qui les ont assignés et réalisent des chiffres d'affaires mensuels qui varient de ￼ FCFA à ￼ FCFA pour un bénefice moyen mensuel de FCFA realisé.
                        es produits ou services sont les suivants:: <br/>
                        <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea>
                    </p><br/>


                    <h2><li>ANALYSE DES FOURNISSEURS</li></h2> 

                        <p>
                            Les principaux fournisseurs de ses entreprises: <br/>
                            <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea> <br/>
                            Ceux-ci se situent géneralement à : <br/>
                            <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea><br/>
                            leurs prix de produits ou matières prémières sont: <br/>
                            <textarea name="" id="" cols="60" rows="10"placeholder="à saisir s'il vous plaît.............." required></textarea><br/>
                            Ils exigent un paiement (type de paiement): <input type="text" required/><br/>
                            Et ce paiement se fait par (moyen de paiement): <input type="text"/>
                            Delais de livraison: <input type="text" required/> <br/>
                            Fréquence de livraison: <input type="text"/><br/>
                            leurs forces se trouvent dans: <br/> <textarea name="" id="" cols="60" rows="10"></textarea><br/>
                            Leurs faiblesses se trouvent dans: <br/> <textarea name="" id="" cols="60" rows="10"></textarea>
                        </p>
                </ol>
                <div class="envoyer">
                    <button type="submit" >ENVOYER</button>
                </div>
      </div>
 </form>

 )
}
export default Marche
