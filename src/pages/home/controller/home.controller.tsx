import React from 'react';
import HomeView from '../views/home.view';
import { UserProvider } from '../../../context/user';
import { PlaylistsProvider } from '../../../context/palylists';

export default function HomeController() {
    return (
        <UserProvider>
            <PlaylistsProvider>
                <HomeView />
            </PlaylistsProvider>
        </UserProvider>
    );
}