import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Typography } from "@alfalab/core-components/typography";
import { useCallback, useState } from "react";

import alfa from "./assets/alfa-card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Radio } from "@alfalab/core-components/radio";
import { Collapse } from "@alfalab/core-components/collapse";
import { List } from "@alfalab/core-components/list";
import { Gap } from "@alfalab/core-components/gap";
import { SmartLayout } from "./smart/SmartLayout.tsx";
import { Status } from "@alfalab/core-components/status";

enum Product {
  Check = "alfa-check",
  Smart = "alfa-smart",
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selectedOption, setSelectedOption] = useState<Product>(Product.Check);
  const [showSmart, setShowSmart] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const submit = useCallback(() => {
    setLoading(true);
    // sendDataToGA({})
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, []);

  const handleSelection = useCallback(() => {
    if (selectedOption === Product.Smart) {
      setShowSmart(true);
    }

    if (selectedOption === Product.Check) {
      submit();
    }
  }, [selectedOption]);

  const handleShowThx = useCallback(() => {
    setThx(true);
  }, []);

  const handleScrollBottom = useCallback((expanded: boolean) => {
    if (expanded) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  if (showSmart) {
    return <SmartLayout handleShowThx={handleShowThx} />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}
        >
          <img
            alt="Картинка карты"
            src={alfa}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <Typography.Text
            style={{ maxWidth: "230px", marginLeft: "18px" }}
            view="primary-medium"
          >
            Альфа-карта
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}
          tag="h3"
          view="xsmall"
          font="system"
          weight="semibold"
        >
          Способ уведомлений
        </Typography.TitleResponsive>

        <div
          className={appSt.radioContainer}
          onClick={() => setSelectedOption(Product.Check)}
        >
          <Radio
            size={24}
            checked={selectedOption === Product.Check}
            disabled={false}
            block={false}
          />
          <div className={appSt.radioTextContainer}>
            <Status color="grey" className={appSt.status} view="contrast">
              Текущая
            </Status>
            <Typography.Text
              tag="p"
              view="primary-medium"
              defaultMargins={false}
            >
              Альфа Чек
            </Typography.Text>
            <Typography.Text
              tag="p"
              view="primary-small"
              defaultMargins={false}
              color="secondary"
              style={{ marginTop: "4px", width: "100%", maxWidth: "236px" }}
            >
              Присылаем пуш-уведомления, если не доходят — отправляем смс
            </Typography.Text>
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="regular"
              defaultMargins={false}
              style={{ marginTop: "10px" }}
            >
              99 руб./мес.
            </Typography.Text>
          </div>
        </div>

        <div
          className={appSt.radioContainer}
          onClick={() => setSelectedOption(Product.Smart)}
        >
          <Radio
            size={24}
            checked={selectedOption === Product.Smart}
            disabled={false}
            block={false}
          />
          <div className={appSt.radioTextContainer}>
            <Status color="red" className={appSt.status} view="contrast">
              Новое
            </Status>
            <Typography.Text
              tag="p"
              view="primary-medium"
              defaultMargins={false}
            >
              Альфа Смарт
            </Typography.Text>
            <Typography.Text
              tag="p"
              view="primary-small"
              defaultMargins={false}
              color="secondary"
              style={{ marginTop: "4px", width: "100%", maxWidth: "260px" }}
            >
              Включает Альфа Чек, плюс дополнительные опции
            </Typography.Text>
            <div className={appSt.radioSmartMore}>
              <Typography.Text
                tag="p"
                view="primary-medium"
                weight="regular"
                defaultMargins={false}
                style={{ marginTop: "10px" }}
              >
                1 мес. бесплатно
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="secondary-large"
                color="secondary"
                weight="regular"
                defaultMargins={false}
                style={{ marginTop: "10px" }}
              >
                Далее 299 руб./мес.
              </Typography.Text>
            </div>
          </div>
        </div>
        <ButtonMobile
          size="xs"
          block={false}
          className={appSt.smartOptionsButton}
          onClick={() => setExpanded((prev) => !prev)}
        >
          Все опции Альфа Смарт
        </ButtonMobile>
        <Gap size={2} />
        <Collapse expanded={expanded} onTransitionEnd={handleScrollBottom}>
          <Typography.TitleResponsive
            tag="h3"
            view="xsmall"
            font="system"
            weight="semibold"
            style={{ marginBottom: "0.5rem" }}
          >
            Что входит в подписку
          </Typography.TitleResponsive>
          <List tag="ul" marker="•">
            <List.Item>+1 топовая категория кэшбэка</List.Item>
            <List.Item>+1 попытка крутить барабан суперкэшбэка</List.Item>
            <List.Item>Секретная подборка партнёров с кэшбэков</List.Item>
            <List.Item>Увеличенный лимит кэшбэка</List.Item>
            <List.Item>+1% годовых</List.Item>
            <List.Item>Бесплатные уведомления</List.Item>
            <List.Item>Бесплатные переводы</List.Item>
            <List.Item>Бесплатное снятие наличных</List.Item>
            <List.Item>Скидка 20% на комиссию на бирже</List.Item>
          </List>
        </Collapse>
      </div>

      <Gap size="7xl" />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={handleSelection}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
