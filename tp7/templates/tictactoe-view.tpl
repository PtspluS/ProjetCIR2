<h1>
    {{#if finished}}La partie est finie
    {{else}}C'est au joueur {{currentPlayer}}
    {{/if}}
</h1>
<table>
    {{#each grid}}
    <tr>
        {{#each this}}
        <td data="{{getCaseIndex @../index @index}}">{{this}}</td>
        {{/each}}
    </tr>
    {{/each}}
</table>
<input type="button" value="Nouvelle partie" />
