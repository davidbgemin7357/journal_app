import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector((state) => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    };

    return (
        <>
            <JournalLayout>
                {/* <Typography variant="h1">JournalPage</Typography> */}
                {/* Ìcono de material */}
                {/* <MailOutline /> */}

                {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cumque, molestiae alias placeat corrupti sunt provident id deserunt quidem doloremque autem eum quisquam quos commodi magni quam aliquam nostrum? Quod?</Typography> */}

                {/* NothingSelected */}
                {/* ! acá comentar NothingSelectedView y descomentar NoteView (o viceversa) para ver el cambio entre los componentes*/}
                {/* <NothingSelectedView /> */}
                {/* <NoteView/> */}

                {!!active ? <NoteView /> : <NothingSelectedView />}

                <IconButton
                    onClick={onClickNewNote}
                    size="large"
                    disabled={isSaving}
                    sx={{
                        color: "white",
                        backgroundColor: "error.main",
                        ":hover": {
                            backgroundColor: "error.main",
                            opacity: 0.9,
                        },
                        position: "fixed",
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>
            </JournalLayout>
        </>
    );
};
