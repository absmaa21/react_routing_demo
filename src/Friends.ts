export interface IFriend {
    id: number,
    firstName: string,
    lastName: string,
    picture: string,
    addDate: number,
}

export default class Friends {
    private static instance: Friends;
    private friendsList: IFriend[];

    private constructor() {
        this.friendsList = [{
            id: 1,
            firstName: "Max",
            lastName: "Mustermann",
            picture: "https://ui-avatars.com/api/?name=Max+Mustermann",
            addDate: Date.now() - 99999
        }];
    }

    public static getInstance(): Friends {
        if(!this.instance) this.instance = new Friends();
        return this.instance;
    }

    public getFriendsList(): IFriend[] {
        return this.friendsList
    }

    public addFriend(firstName: string, lastName: string, picture?: string) {
        this.sortFriendsListById();
        if(!picture) picture = "https://ui-avatars.com/api/?name=" + firstName + "+" + lastName;
        this.friendsList.push({id: this.getLowestAvailableId(), firstName: firstName, lastName: lastName, picture: picture, addDate: Date.now()})
    }

    public sortFriendsListById() {
        this.friendsList.sort((a, b) => {
            if(a.id > b.id) return 1;
            if(a.id < b.id) return -1;
            return 0;
        })
    }

    public getLowestAvailableId(): number {
        let lowestAvailableId: number = 1;
        this.friendsList.forEach(friend => {
            if(lowestAvailableId < friend.id) return lowestAvailableId;
            lowestAvailableId++;
        });
        return lowestAvailableId;
    }
}
