export let ABOUT_US_ID = "63ad2e58eecdd9e5";
export let DO_AND_SHARE_ID = "05e2fa92643677ca";

export function welcomePage(aboutUs, doAndShare) {
  return {
    "title": "Welcome Visitors",
    "story": [
      {
        "text":
          "Welcome to this [http://fed.wiki.org/view/federated-wiki Federated Wiki] site. From this page you can find who we are and what we do. New sites provide this information and then claim the site as their own. You will need your own site to participate.",
        "id": "7b56f22a4b9ee974",
        "type": "paragraph"
      },
      {
        "type": "paragraph",
        "id": "821827c99b90cfd1",
        "text": "Pages about us."
      },
      {
        "type": "paragraph",
        "id": ABOUT_US_ID,
        "prompt":
          "Link to a page about yourself here. Type your name enclosed in double square brackets. Then press Command/ALT-S to save.\n\nMake all pages here yours alone with the login below.",
        "text": aboutUs
      },
      {
        "type": "paragraph",
        "id": "2bbd646ff3f44b51",
        "text": "Pages where we do and share."
      },
      {
        "type": "paragraph",
        "id": DO_AND_SHARE_ID,
        "prompt":
          "Create pages about things you do on this wiki. Type a descriptive name of something you will be writing about. Enclose it in square brackets. Then press Command/ALT-S to save.",
        "text": doAndShare
      },
      {
        "type": "paragraph",
        "id": "ee416d431ebf4fb4",
        "text":
          "You can edit your copy of these pages. Press [+] to add more writing spaces. Read [http://fed.wiki.org/view/how-to-wiki How to Wiki] for more ideas. Follow [[Recent Changes]] here and nearby."
      }
    ],
    "journal": [
      {
        "type": "create",
        "item": {
          "title": "Welcome Visitors",
          "story": []
        },
        "date": 1420938191608
      },
      {
        "type": "add",
        "item": {
          "text": "Welcome to this [[Federated Wiki]] site. From this page you can find who we are and what we do. New sites provide this information and then claim the site as their own. You will need your own site to participate.",
          "id": "7b56f22a4b9ee974",
          "type": "paragraph"
        },
        "id": "7b56f22a4b9ee974",
        "date": 1420938199166
      },
      {
        "type": "add",
        "item": {
          "type": "paragraph",
          "id": "821827c99b90cfd1",
          "text": "Pages about us."
        },
        "after": "7b56f22a4b9ee974",
        "id": "821827c99b90cfd1",
        "date": 1420938202921
      },
      {
        "type": "add",
        "item": {
          "type": "factory",
          "id": "63ad2e58eecdd9e5",
          "prompt": "Link to a page about yourself here. Type your name enclosed in double square brackets. Then press Command/ALT-S to save.\n\nMake all pages here yours alone with the login below."
        },
        "after": "821827c99b90cfd1",
        "id": "63ad2e58eecdd9e5",
        "date": 1420938208737
      },
      {
        "type": "add",
        "item": {
          "type": "paragraph",
          "id": "2bbd646ff3f44b51",
          "text": "Pages where we do and share."
        },
        "after": "63ad2e58eecdd9e5",
        "id": "2bbd646ff3f44b51",
        "date": 1420938212624
      },
      {
        "type": "add",
        "item": {
          "type": "factory",
          "id": "05e2fa92643677ca",
          "prompt": "Create pages about things you do on this wiki. Type a descriptive name of something you will be writing about. Enclose it in square brackets. Then press Command/ALT-S to save."
        },
        "after": "2bbd646ff3f44b51",
        "id": "05e2fa92643677ca",
        "date": 1420938216782
      },
      {
        "type": "add",
        "item": {
          "type": "paragraph",
          "id": "ee416d431ebf4fb4",
          "text": "You can edit your copy of these pages. Press [+] to add more writing spaces. Read [[How to Wiki]] for more ideas. Follow [[Recent Changes]] here and nearby."
        },
        "after": "05e2fa92643677ca",
        "id": "ee416d431ebf4fb4",
        "date": 1420938220851
      }
    ]
  };
}